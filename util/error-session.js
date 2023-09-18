exports.createErrorSession = (req, data) => {
    req.session.errorData = {
        ...data,
    };
};
