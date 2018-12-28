const NodeHelper = require("node_helper");
const ping = require("ping");

module.exports = NodeHelper.create({
    start: function() {
        console.log(this.name + " helper started ...");
    },

    socketNotificationReceived: function(notification, payload) {
        const config = payload.config;
        if (notification === "MMM_NETWORKSIGNAL_CHECK_SIGNAL") {
            const self = this;
            ping.promise
                .probe(config.server, {
                    timeout: config.maxTimeout,
                })
                .then(pong => {
                    // console.log(pong);
                    self.sendSocketNotification(
                        "MMM_NETWORKSIGNAL_RESULT_PING",
                        pong.time,
                    );
                })
                .catch(err => {
                    // console.log(err);
                    self.sendSocketNotification(
                        "MMM_NETWORKSIGNAL_RESULT_PING",
                        9999,
                    );
                });
        }
    },
});
