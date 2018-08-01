const { 
    SERVER_PORT, 
    REACT_APP_DOMAIN, 
    REACT_APP_CLIENT_ID, 
    CLIENT_SECRET,
    SESSION_SECRET, 
    CONNECTION_STRING
} = process.env

module.exports={
    auth0: async (req,res) => {
        let payload = {
            client_id: REACT_APP_CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code: req.query.code,
            grant_type: 'authorization_code',
            redirect_uri: `http://${req.headers.host}`
        }
    
        let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
        let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)
        
        const db = req.app.get('db')
        let { sub, email, name, picture } = resWithUserData.data
    
        let foundUser = await db.find_user([sub])
        if(foundUser[0]){
        req.session.user = foundUser[0];
        console.log(req.session.user)
        
        res.redirect('/#/admin/members')
        } else {
            let createdUser = await db.create_member([name,sub,email,picture])
            req.session.user = createdUser
            res.redirect('/#/admin/members')
        }
    }
}