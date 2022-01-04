const jwt = require("jsonwebtoken");

const isLoggedIn = (req, res, next) => {
    // jwt verify
    let token = null;

    if(req.headers['authorization']){
        token = req.headers['authorization'];
    }
    if(req.headers['x-access-token']){
        token = req.headers['x-access-token'];
    }
    if(req.query.token){
        token = req.query.token;
    }

    //console.log(token);


    if(token === null){
        // not logged in
         next("Access denied.");
        // res.json({
        //     msg: "token was not empty"
        // });
    }

    const data = jwt.verify(token, "Private key");
    if(!data){
        next('Invalid token')
    }
    req.user = data;
    //res.json(data);    
    next();
}

module.exports = isLoggedIn;