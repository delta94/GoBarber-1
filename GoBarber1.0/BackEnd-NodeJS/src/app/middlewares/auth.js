import { promisify } from 'util';

import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

/**
 * Middleware of authentication, here is checked if the header of the requisition has a token
 */
export default async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token is not provided' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);

        /**
         * Add variable to request
         */
        req.userId = decoded.id;

        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Token invalid' });
    }
};
