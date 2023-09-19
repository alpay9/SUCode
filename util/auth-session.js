exports.createAuthSession = (req, user) => {
    req.session.userId = user._id.toString();
    req.session.username = user.email.split("@")[0];
    req.session.isAdmin = user.isAdmin;
};

exports.resetAuthSession = (req) => {
    req.session.userId = null;
    req.session.username = null;
    req.session.isAdmin = null;
};
