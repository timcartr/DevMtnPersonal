UPDATE members
SET	first_name = $1,
    last_name = $2,
    email = $3,
    phone = $4
WHERE member_Id = $5
returning *;