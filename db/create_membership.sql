insert into memberships (member_id)
values ($1)
returning *;