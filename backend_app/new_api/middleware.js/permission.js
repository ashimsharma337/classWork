const url = require("url");

const permission = (req, res, next) =>{

        const persmission = [
            {
                Admin: [
                    'create', 'edit','delete'
                ]
            }
        ];

        let action = req.originalUrl.split['/'];
        action = action[action.length-1];

        const user_role = req.user.role;
        if(persmission[0][user_role].includes(action)){
            // permission granted
            next()
        } else {
            console.log("Error");
            // permission not granted
            next("Access denied");
        }

}

module.exports = permission;