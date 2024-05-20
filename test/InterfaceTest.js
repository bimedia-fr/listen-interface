/*jslint node : true, nomen: true, plusplus: true, vars: true, eqeq: true,*/
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";
var assert = require('assert');
var listen = require('../lib/index');
var os = require('os');

describe('[ARCHITECT][RESTIFY]', function () {
    describe('[INTERFACE]', function () {
        it('default listener ', function (done) {
            const server = {
                listen: function (options, cb) {
                    const host = options.host;
                    const port = options.port;
                    assert.strictEqual(typeof host, 'string')
                    assert.strictEqual(host, '127.0.0.1');
                    cb();
                }
            };
            const options = { 
                'interface': Object.keys(os.networkInterfaces())[0],
                port: 0
            };
            listen(server, options, function (err, res) {
                assert.ifError(err);
                assert.ok(res);
                done();
            });
        });
        it('listen with parameters', function (done) {
            const server = {
                listen: function (options, cb) {
                    const host = options.host;
                    const port = options.port;
                    assert.strictEqual(typeof host, 'string')
                    assert.strictEqual(host, '127.0.0.1');
                    assert.strictEqual(options.exclusive, true);
                    cb();
                }
            };
            const options = { 
                'interface': Object.keys(os.networkInterfaces())[0],
                port: 0,
                exclusive: true
            };
            listen(server, options, function (err, res) {
                assert.ifError(err);
                assert.ok(res);
                done();
            });
        });
        it('listen should override host', function (done) {
            const server = {
                listen: function (options, cb) {
                    const host = options.host;
                    const port = options.port;
                    assert.strictEqual(typeof host, 'string')
                    assert.strictEqual(host, '127.0.0.1');
                    assert.strictEqual(options.exclusive, true);
                    cb();
                }
            };
            const options = { 
                'interface': Object.keys(os.networkInterfaces())[0],
                host: '192.168.0.0.17',
                port: 0,
                exclusive: true
            };
            listen(server, options, function (err, res) {
                assert.ifError(err);
                assert.ok(res);
                done();
            });
        });
    });
});
