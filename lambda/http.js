var https = require("https");

exports.handler = async event => {
    var body = JSON.parse(event.body)


        var options = {

            path: '',
            method: 'POST',
            headers: {        
                'Content-Type': 'application/json'
            }
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
