var https = require("https");

exports.handler = async event => {
    var body = event.body || event.queryStringParameters || ''


        var options = {

            path: 'https://script.google.com/macros/s/AKfycbzyABTDSiNim6Z2wYzUAki0OjGHbeVjO8arxuh87V-w2SpHXapv/exec',
            method: 'POST',
//             headers: {        
//                 'Content-Type': 'application/json'
//             },
            body: body
        }
    
        var req = https.request(options, function(res) {

            res.setEncoding('utf8');
            
            res.on('end', function () {
                callback(null, {
                    statusCode: 200
                })
            })
        })
        
        req.on('error', function (e) {
            console.log('Problem with request:', e.message);
        })

        req.write(postData)
        req.end()

        callback(null, {
            statusCode: 200
        })
    }
