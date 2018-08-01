insert into members (username, auth_id, email, profile_pic)
values ($1, $2, $3, $4)
RETURNING *;