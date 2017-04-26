require('babel-register')();

var jsdom = require("jsdom").jsdom;
var doc = jsdom();
var exposedProperties = ['window', 'navigator', 'document'];

global.document = doc('');
global.window = document.defaultView;
Object
    .keys(document.defaultView)
    .forEach((property) => {
        if (typeof global[property] === 'undefined') {
            exposedProperties.push(property);
            global[property] = document.defaultView[property];
        }
    });

global.navigator = {
    userAgent: 'node.js'
};

documentRef = document;