/**
 * Magic Mirror
 * Module: MMM-network-signal
 *
 * By PoOwAa https://github.com/PoOwAa/MMM-network-signal
 * MIT Licensed.
 */

Module.register("MMM-network-signal", {
    // Default module config
    defaults: {
        updateInterval: 1000 * 5, // check network every seconds
        maxTimeout: 1000, // maximum timeout
        animationSpeed: 1000 * 0.25, // fade effect
        initialLoadDelay: 1000 * 3, // first check delay
        server: "8.8.8.8", // Server to check network connection. Default 8.8.8.8 is a Google DNS server
        thresholds: {
            strong: 50,
            medium: 150,
            weak: 500,
        },
    },

    // Custom CSS for wifi logo
    getStyles: function() {
        return ["MMM-network-signal.css"];
    },

    start: function() {
        Log.info("Starting module: " + this.name);
        const self = this;

        setTimeout(() => {
            self.pingTest();
            setInterval(() => {
                self.pingTest();
            }, self.config.updateInterval); // Actual loop timing
        }, self.config.initialLoadDelay); // First delay
    },

    getDom: function() {
        const wrapper = document.createElement("div");
        wrapper.setAttribute("id", "MMM-network-signal-wifi-signal");
        wrapper.className = "small";

        const signalClasses = this.getSignalClasses();

        const wifiSign = document.createElement("div");

        // Changing icon
        switch (true) {
            // Fast ping, strong signal
            case this.ping < this.config.thresholds.strong:
                wifiSign.className = signalClasses.strong;
                break;
            // Medium ping, medium signal
            case this.ping < this.config.thresholds.medium:
                wifiSign.className = signalClasses.medium;
                break;
            // Slow ping, weak signal
            case this.ping < this.config.thresholds.weak:
                wifiSign.className = signalClasses.weak;
                break;
            // Ultraslow ping, better if "no signal"
            case this.ping > this.config.thresholds.weak:
                wifiSign.className = signalClasses.none;
                break;
            // No actual ping, maybe just searching for signal
            default:
                wifiSign.className = signalClasses.loading;
                break;
        }

        wrapper.appendChild(wifiSign);
        return wrapper;
    },

    // Send socket notification, to start pinging the server
    pingTest: function() {
        this.sendSocketNotification("MMM_NETWORKSIGNAL_CHECK_SIGNAL", {
            config: this.config,
        });
    },

    // Handle socket answer
    socketNotificationReceived: function(notification, payload) {
        // Care only own socket answers
        if (notification === "MMM_NETWORKSIGNAL_RESULT_PING") {
            this.ping = payload;
            this.updateDom(this.config.animationSpeed);
        }
    },

    // Pre-defined classes for wifi sign
    getSignalClasses: function() {
        return {
            none: "MMM-network-signal-wifi none", // Empty wifi logo
            weak: "MMM-network-signal-wifi weak", // 1 bar wifi logo
            medium: "MMM-network-signal-wifi medium", // 2 bars wifi logo
            strong: "MMM-network-signal-wifi", // 3 bars wifi logo
            loading: "MMM-network-signal-wifi loading", // wifi logo with loading animation
        };
    },
});
