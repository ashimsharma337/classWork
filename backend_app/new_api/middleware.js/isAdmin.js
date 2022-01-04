const isAdmin = (req, res, next) => {
    if(!req.user){
        next('Login to continue...');
    }

    console.log(req.user);
    if(req.user.role == 'Admin'){
        next();
    } else {
        res.redirect('/api/user');
    }
}
module.exports = isAdmin;