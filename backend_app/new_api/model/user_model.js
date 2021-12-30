const mongoose = require("mongoose");

const RolesSchema = new mongoose.Schema({
      name: String,
});

const Role = mongoose.model("Role", RolesSchema);

const UserSchema = new mongoose.Schema({
      name: {
          type: String,
          required: true
      },
      email: {
          type: String,
          unique: true,
          required: true
      },
      password: {
          type: String,
          required: true
      },
      roles: {
          type: String,
          enum: ["Admin", "Seller", "Customer"],
          default: "Customer"
      },
      status: {
        type: String,
        enum: ['active','suspend'],
        default: 'suspend'
      }

     //   roles: {
     //       type: mongoose.Types.ObjectId
     //   }
}, {
      timestamps: true
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

