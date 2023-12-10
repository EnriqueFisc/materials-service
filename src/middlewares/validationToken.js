/**
 * Token validator middleware
 */
const express = require('express');
const { verifyAuthUser } = require('../utils');

const tokenValidator = async(req = express.request, res, next) => {
    const token = req.get('Access');
    if( !token ) {
        return res.status(404)
        .json({
            ok: false,
            msg: 'User no Authenticated'
        })
    }
    try {
        const responseToken = await verifyAuthUser(token);
        const response = await responseToken.json();

        if( !response.ok) {
            return res.status(403)
            .json({
                ok: false,
                msg: 'Not valid token',
            });
        }
    } catch (error) {
        console.log(error)
        return res.status(400)
            .json({
                ok: false,
                msg: 'Someting went wrong',
            });
    }

    next()
}

module.exports = {
    tokenValidator
}