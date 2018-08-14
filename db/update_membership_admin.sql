UPDATE memberships
SET	start_date = $1,
    end_date = $2
WHERE member_Id = $3
returning *;