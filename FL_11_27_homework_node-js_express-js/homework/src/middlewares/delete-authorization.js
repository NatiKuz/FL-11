exports.deleteAuthorization = (req, res, next) => {    
    if (req.method === 'DELETE' && req.header('Authorization') !== 'X-Password qwerty') {
        const err = new Error('Not authorized! Go back!');
        err.status = 401;
        return next(err);
    }

    next();
};
