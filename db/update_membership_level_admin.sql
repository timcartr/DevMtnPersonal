UPDATE members
SET	membership_level = $1
WHERE member_Id = $2
returning *;