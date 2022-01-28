const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodeToken = jwt.verify(token, 'somespecialsecretkey');
        req.isAuth = true;
        req._id = decodeToken.id;
        req._type = decodeToken.type;
        next();
    } catch (error) {
        req.isAuth = false;
        next();
    }
}