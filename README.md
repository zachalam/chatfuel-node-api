# Project Title

Broadcast messages to your chatbot users with this unofficial chatfuel api wrapper.


### Installing

```
npm install --save chatfuel-node-api
```

or globally..

```
npm install --g chatfuel-node-api
```

### How To Use

Follow these 3 easy steps to broadcast messages.

Include/Require chatfuel-node-api.
```
var Chatfuel = require("chatfuel-node-api");
```

Create new chatfuel instance.
```
var cf = new Chatfuel(<token>,<bot_id>);
```

Broadcast your message.
```
cf.broadcast({
  user_id: <user_id>,
  block_id: <block_id>,
  attributes: {var1: true, var2: false, var3: "message"}},
  function(body) {
    // what to do after..
  }
});
```

### Putting it all Together

Here's a final working code snippet. See "how to use" for parameter values.

```
var Chatfuel = require("chatfuel-node-api");
var cf = new Chatfuel(
  "mELtlMAHYqR0BvgEiMq8zVek3uYUK3OJMbtyrdNPTrQB9ndV0fM7lWTFZbM4MZvD",
  "14c12219re312abgtfd12346q");
cf.broadcast({
  user_id: 521412412512,
  block_id: 2123,
  attributes: {var1: true, var2: false, var3: "message"}},
  function(body) {
    // what to do after..
  }
});  

```
