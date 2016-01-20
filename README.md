# listen-interface
module to listen on a specific network interface



## Installation

```sh
npm install --save listen-interface
```

## exemple :

```js
var http = require('http'),
    listen = require('listen-interface');
    
var server = http.createServer(function(req, res) {
 // ...
});

listen(server, { 'port': 8080, 'interface': 'wlan0'})
```

## API :

`listen` :
 * `server` : http server or net server
 * `config` : 
   * `port` : port to listen to
   * `interface` : network interface to listen to
 * [callback] : optionnal callback function 
 
