
exports.checkIsAdmin = (req, res, next) => {
    if (!req.session.isAdmin) {
        res.render("general/error", {pageTitle: "You have no access"});
        return;
    }
    next();
};

exports.getAdminPage = (req, res) => {
    res.render("admin/admin");
};
