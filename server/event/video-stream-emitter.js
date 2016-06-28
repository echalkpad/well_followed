var EventEmitter = require('events'),
    util = require('util');
require('events').EventEmitter.prototype._maxListeners = 0;
function VideoStreamEmitter() {
    return EventEmitter.call(this);
}
util.inherits(VideoStreamEmitter, EventEmitter);

VideoStreamEmitter.prototype.stream = function(data) {
    this.emit('stream', data);
};

module.exports = VideoStreamEmitter;
