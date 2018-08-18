select * from members
left join memberships on members.member_id = memberships.member_id
where members.member_id = $1;