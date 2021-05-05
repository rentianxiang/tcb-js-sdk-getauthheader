const axios = require('axios')

module.exports = async function (env, ticket) {
    if (Object.prototype.toString.call(env) !== '[object String]') {
        throw new Error('env should be String')
    }
    if (Object.prototype.toString.call(ticket) !== '[object String]') {
        throw new Error('ticket should be String')
    }
    const seqId = Math.random().toString(16).slice(2)
    const url = `http://tcb-api.tencentcloudapi.com/web?env=${env}`
    const headers = {
        'Origin': 'http://127.0.0.1:5500',
        'Referer': 'http://127.0.0.1:5500/',
        'X-SDK-Version': '@cloudbase/js-sdk/1.5.0',
        'x-seqid': seqId
    }
    const refresh_token = await new Promise((resolve, reject) => {
        const config = {
            method: 'POST',
            url: url,
            headers: headers,
            data: {
                "action": "auth.signInWithTicket",
                "env": env,
                "ticket": ticket,
                "refresh_token": "",
                "seqId": seqId
            }
        }
        axios.request(config)
            .then(res => resolve(res.data.refresh_token))
            .catch(err => reject(err))
    })
    const access_token = await new Promise((resolve, reject) => {
        const config = {
            method: 'POST',
            url: url,
            headers: headers,
            data: {
                "action": "auth.fetchAccessTokenWithRefreshToken",
                "env": env,
                "refresh_token": refresh_token,
                "seqId": seqId
            }
        }
        axios.request(config)
            .then(res => resolve(res.data.access_token))
            .catch(err => reject(err))
    })
    const authHeader = {
        'x-cloudbase-credentials': access_token + '/@@/' + refresh_token
    }
    return authHeader
}