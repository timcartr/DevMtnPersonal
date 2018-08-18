UPDATE memberships
SET	membership_level = $1,
    cost = $2,
    start_date = $3,
    end_date = $4
WHERE member_Id = $5
returning *;