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
    updateMember: (req, res) => {
        const db = req.app.get('db')
        
        
        db.get_all_members(req.params.id)
        .then( results => { res.status(200).send(results)})
    }
}