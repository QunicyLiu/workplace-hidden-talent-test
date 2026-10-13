create table if not exists public.test_codes (
  code text primary key,
  max_uses integer not null default 3 check (max_uses > 0),
  used_count integer not null default 0 check (used_count >= 0 and used_count <= max_uses),
  created_at timestamptz not null default now()
);

alter table public.test_codes enable row level security;

revoke all on table public.test_codes from anon, authenticated;

grant usage on schema public to anon;
grant execute on function public.redeem_test_code(text) to anon;

drop function if exists public.redeem_test_code(text);
create or replace function public.redeem_test_code(input_code text)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare
  redeemed public.test_codes;
begin
  update public.test_codes
  set used_count = used_count + 1
  where code = upper(trim(input_code))
    and used_count < max_uses
  returning * into redeemed;

  if not found then
    return json_build_object('ok', false, 'message', '密码无效或测试次数已用完。');
  end if;

  return json_build_object('ok', true, 'remaining', redeemed.max_uses - redeemed.used_count);
end;
$$;

insert into public.test_codes (code)
values
  ('XHSTALENT'),
  ('WORKTALENT'),
  ('20261012')
on conflict (code) do nothing;
