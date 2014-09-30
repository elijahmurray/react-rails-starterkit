var config = require("../config");
var R = require("react-rails").install(config.install);
var co = require("co");
global.Promise = require("bluebird");

var App = require("./App");

var client = new R.Client(App);
co(client.mount).call(client);
