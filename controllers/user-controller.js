const bcrypt = require("bcryptjs");
const User = require("../models/user-model");

exports.createUser = (email, password, isAdmin = false) => {
    const user = new User({
        username: email.split("@")[0],
        email: email,
        password: bcrypt.hashSync(password, 12),
        isAdmin: isAdmin,
    });
    return user.save();
};

exports.getUserWithSameEmail = async email => {
    const user = await User.findOne({ email: email });
    return user;
};
