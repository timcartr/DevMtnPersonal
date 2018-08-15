UPDATE members
SET	phone = $1
WHERE member_Id = $2
returning *;