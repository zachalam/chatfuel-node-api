'use strict';
/*
██████╗██╗  ██╗ █████╗ ████████╗███████╗██╗   ██╗███████╗██╗
██╔════╝██║  ██║██╔══██╗╚══██╔══╝██╔════╝██║   ██║██╔════╝██║
██║     ███████║███████║   ██║   █████╗  ██║   ██║█████╗  ██║
██║     ██╔══██║██╔══██║   ██║   ██╔══╝  ██║   ██║██╔══╝  ██║
╚██████╗██║  ██║██║  ██║   ██║   ██║     ╚██████╔╝███████╗███████╗
╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚══════╝

Broadcast messages to your chatbot users with this unofficial
chatfuel api wrapper.
Author: Zach Alam <www.zachalam.com>
*/

// request module for making http requests.
var request = require('request');
var queryString = require("query-string");

// API Constructor.
var Chatfuel = function(token,bot_id)
{
  // save api key for class methods.
  this.token = token;
  this.bot_id = bot_id;
};

// export Typeform variable.
module.exports = Chatfuel;

// generates a URL string which represents the specific location
// we are calling on the typeform API.
Chatfuel.prototype.broadcast = function(sendData,callback) {

  // gather sendData
  var user_id = sendData.user_id;
  var block_id = sendData.block_id;
  var attributes = sendData.attributes;

  // generate the broadcast url.
  var url = "https://api.chatfuel.com/bots/"+this.bot_id+"/users/"+user_id+
  "/send?chatfuel_token="+this.token+"&chatfuel_block_id="+block_id;

  // attributes to send with broadcast (if added)
  if(typeof attributes === 'object') url = url + "&" + queryString.stringify(attributes);

  // make chatfuel request.
  request.post({url: url}, function (error, response, body) {
    callback(body);
  });
};
