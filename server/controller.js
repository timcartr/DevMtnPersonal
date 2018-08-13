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
        console.log('updatedMember', updatedMember[0].member_id)
        let foundUser = await db.find_user([updatedMember[0].auth_id])
        console.log('foundUser',foundUser)
        // foundUser[0] ? res.send(foundUser) : res.sendStatus(401)
        res.send(foundUser)
    },
    updateMembership: async (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        const { membership_level } = req.body
        
        let updatedMembership = await db.update_membership([membership_level, id])
        // console.log('updatedMembership', updatedMembership[0])
        let foundUser = await db.find_user([updatedMembership[0].auth_id])
        // console.log('foundUser',foundUser)
        // foundUser[0] ? res.send(foundUser) : res.sendStatus(401)
        res.send(foundUser)
    }
}