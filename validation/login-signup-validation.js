exports.checkCredentials = (email, password) => {
    return (
        email &&
        password &&
        email.trim().length >= 6 &&
        password.trim().length >= 6 &&
        email.includes("@")
    );
};

exports.confirmPasswordMatching = (pass, confirm) => {
    return pass === confirm;
};
