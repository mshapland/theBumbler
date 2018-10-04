var restify = require('restify');
var builder = require('botbuilder');

//===================================================
// Bot Setup
//===================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat bot
var connector = new builder.ChatConnector({
    appId: 'cc91a105-fd26-4f26-bacf-4161fae7fcf0',
    appPassword: 'bndmGZIA47#-$mxvNNI987_'
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//===================================================
// Bots Dialogs
//===================================================

bot.dialog('/', function (session) {
    session.send("Hello Shap");;
})