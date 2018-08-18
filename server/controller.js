module.exports={
    getUser: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(401).send('Nice try sucka!')
        }
    },
    getAllMembers: (req, res) => {
        const db = req.app.get('db')
        
        
        db.get_all_members(req.params.id)
        .then( results => { res.status(200).send(results)})
    },
    updateMember: async (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const { first_name, last_name, email, phone } = req.body

        let updatedMember = await db.update_member([first_name, last_name, email, phone, id])
        let foundUser = await db.find_user_member_id([updatedMember[0].member_id])
        // console.log('foundUser',foundUser)
        foundUser[0] ? res.send(foundUser) : res.sendStatus(401)
    },
    updateMemberPhone: async (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const { phone } = req.body
        let updatedMember = await db.update_member_phone([ phone, id])
        let foundUser = await db.find_user_member_id([updatedMember[0].member_id])
        // console.log('foundUser',foundUser)
        foundUser[0] ? res.send(foundUser) : res.sendStatus(401)
    },
    updateMemberSince: async (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const { membershipSelection, cost, start_date, end_date, member_since } = req.body
        let updatedMembership = await db.update_membership([membershipSelection, cost, start_date, end_date, id])
        let updatedMember = await db.update_member_since([member_since, id])
        let foundUser = await db.find_user_member_id([updatedMember[0].member_id])
        // console.log('foundUser',foundUser)
        foundUser[0] ? res.send(foundUser) : res.sendStatus(401)
    },
    updateMembership: async (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const { membershipSelection, cost, start_date, end_date } = req.body
        
        let updatedMembership = await db.update_membership([membershipSelection, cost, start_date, end_date, id])
        console.log('updatedMembership', updatedMembership[0])
        let foundUser = await db.find_user_member_id([id])
        console.log('foundUser',foundUser)
        foundUser[0] ? res.send(foundUser) : res.sendStatus(401)
    },
    deleteMember: (req, res) => {
        const db = req.app.get('db')

        // console.log(req.params)
        db.delete_member([req.params.id])
        res.sendStatus(200)
    },
    updatePic: async (req,res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const { profile_pic } = req.body


        console.log(req.params)
        console.log(req.body)
        let updatedProfilePic = await db.update_profile_pic([profile_pic, id])
        res.send(updatedProfilePic)
    },
    logout: (req, res) => {
        req.session.destroy()
        res.status(200).send("Gone")
    }
}