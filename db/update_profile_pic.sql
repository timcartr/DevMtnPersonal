UPDATE members
SET	profile_pic = $1
WHERE member_Id = $2
returning *;