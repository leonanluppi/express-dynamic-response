# Express Dynamic Response

Express response is a middleware which allow create custom responses based on express.response class.

## How to use

First you need to add as project dependency:

```sh
$ npm install express-dynamic-response --save
```

Then you need to configure your response directory:

```sh
$ cd <YOUR_PROJECT>
$ mkdir <RESPONSE_FOLDER>
```

Then just setup as a new middleware (ES6):
```sh
import expressResponse from 'express-response'
app.use(expressResponse(path.join(__dirname, <YOUR_RESPONSE_FOLDER>))
```

Then just setup as a new middleware (ES5):
```sh
var expressResponse = require('express-response');
app.use(expressResponse(path.join(__dirname, <YOUR_RESPONSE_FOLDER>))
```

After setup a new middleware you can go to response folder then create a new response per file:

```sh
//this is a express.response class so you have everthing you need here
module.exports = function() {
    this.status(200);
    this.send('adads');
};
```

You can create more dynamic response using objects by params:

```sh
//this is a express.response class so you have everthing you need here
module.exports = function(obj) {
    this.status(200);
    this.json(obj);
};
```

### Be creative :)

For any doubts or problem please open a issue

License
----

MIT