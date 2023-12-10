/**
 * Verify user access by token
 * @param {Object} data 
 * @returns {Promise}
 */
const verifyAuthUser = async(token) => {
    return await fetch('http://localhost:5000/token/validate',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({token})
    });
}


module.exports = {
    verifyAuthUser
}