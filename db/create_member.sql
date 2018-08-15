insert into members (first_name, last_name, auth_id, email, profile_pic)
values ($1, $2, $3, $4, $5)
returning *;