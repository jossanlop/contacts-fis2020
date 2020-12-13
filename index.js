const app = require('./server.js');
const dbConnect = require('./db.js');

var port = (process.env.PORT || 3000);
console.log("Starting API server..."+port);

dbConnect().then(
    () => {
        app.listen(port);
        console.log("Server Ready!");
    },
    err => {
        console.log("Connection error: "+err);
    }
)