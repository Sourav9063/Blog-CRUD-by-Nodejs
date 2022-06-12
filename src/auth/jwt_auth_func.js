const jwt = require('jsonwebtoken');
exports.auth_token_create = (user) => {
    const { email, id, name } = user;
    const token = jwt.sign({ email, id, name }, process.env.JWT_SECRET, { expiresIn: '30d' });
    return token;
}

exports.check_token = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(401).json({ 'error': 'token is not valid' });
        console.log(user);
        req.user = user;
        next();
    });
}

