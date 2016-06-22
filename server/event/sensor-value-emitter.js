var EventEmitter = require('events'),
    util = require('util');
//EventEmitter.setMaxListeners(100);
require('events').EventEmitter.prototype._maxListeners = 0;
function SensorValueEmitter() {
    return EventEmitter.call(this);
}
util.inherits(SensorValueEmitter, EventEmitter);

SensorValueEmitter.prototype.value = function(data) {
    this.emit('value', data);
};

module.exports = SensorValueEmitter;
