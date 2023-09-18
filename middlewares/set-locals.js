function setLocals(req, res, next) {
    if (req.session.userId) {
        res.locals.isAuth = true;
        res.locals.username = req.session.username;
        if (req.session.isAdmin) {
            res.locals.isAdmin = true;
        }
    }
    if (req.session.colorMode) {
        res.locals.colorMode = req.session.colorMode;
    }

    next();
}

module.exports = setLocals;
