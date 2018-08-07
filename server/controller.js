module.exports={
    getAllMembers: (req, res) => {
        const db = req.app.get('db')
        
        
        db.get_all_members(req.params.id)
        .then( results => { res.status(200).send(results)})
    }
}