var Rn;
(function (Rn) {
    var Core;
    (function (Core) {
        var Logging;
        (function (Logging) {
            (function (LogSeverity) {
                LogSeverity[LogSeverity["TRACE"] = 1] = "TRACE";
                LogSeverity[LogSeverity["DEBUG"] = 2] = "DEBUG";
                LogSeverity[LogSeverity["INFO"] = 3] = "INFO";
                LogSeverity[LogSeverity["WARN"] = 4] = "WARN";
                LogSeverity[LogSeverity["ERROR"] = 5] = "ERROR";
                LogSeverity[LogSeverity["FATAL"] = 6] = "FATAL";
            })(Logging.LogSeverity || (Logging.LogSeverity = {}));
            var LogSeverity = Logging.LogSeverity;
            var Logger = (function () {
                function Logger() {
                    this._enabled = true;
                    this._severity = LogSeverity.WARN;
                    // holder for now
                }
                /**
                 * Enables the logger
                 */
                Logger.prototype.enableLogger = function () {
                    this._enabled = true;
                };
                /**
                 * Disables the logger
                 */
                Logger.prototype.disableLogger = function () {
                    this._enabled = false;
                };
                /**
                 * Set the logging severity for this logger instance - only messages matching the given severity (or greater) will be logged
                 * @param {LogSeverity} severity - desired logging severity
                 */
                Logger.prototype.setLoggingSeverity = function (severity) {
                    this._severity = severity;
                };
                /**
                 * Logs a TRACE message from the logger for the specified source
                 * @param {string} source - the source of the message (this canbe used for filtering out noise)
                 * @param {string} message - the message you are logging
                 */
                Logger.prototype.trace = function (source, message) {
                    if (!this._enabled || !this.canLog(LogSeverity.TRACE)) {
                        return;
                    }
                    console.log("[TRACE] " + source + " :: " + message);
                };
                /**
                 * Logs a DEBUG message from the logger for the specified source
                 * @param {string} source - the source of the message (this canbe used for filtering out noise)
                 * @param {string} message - the message you are logging
                 */
                Logger.prototype.debug = function (source, message) {
                    if (!this._enabled || !this.canLog(LogSeverity.DEBUG)) {
                        return;
                    }
                    console.log("[DEBUG] " + source + " :: " + message);
                };
                /**
                 * Logs a INFO message from the logger for the specified source
                 * @param {string} source - the source of the message (this canbe used for filtering out noise)
                 * @param {string} message - the message you are logging
                 */
                Logger.prototype.info = function (source, message) {
                    if (!this._enabled || !this.canLog(LogSeverity.INFO)) {
                        return;
                    }
                    console.info("[DEBUG] " + source + " :: " + message);
                };
                /**
                 * Logs a WARN message from the logger for the specified source
                 * @param {string} source - the source of the message (this canbe used for filtering out noise)
                 * @param {string} message - the message you are logging
                 */
                Logger.prototype.warn = function (source, message) {
                    if (!this._enabled || !this.canLog(LogSeverity.WARN)) {
                        return;
                    }
                    console.warn("[DEBUG] " + source + " :: " + message);
                };
                /**
                 * Logs a ERROR message from the logger for the specified source
                 * @param {string} source - the source of the message (this canbe used for filtering out noise)
                 * @param {string} message - the message you are logging
                 */
                Logger.prototype.error = function (source, message) {
                    if (!this._enabled || !this.canLog(LogSeverity.ERROR)) {
                        return;
                    }
                    console.error("[DEBUG] " + source + " :: " + message);
                };
                /**
                 * Logs a FATAL message from the logger for the specified source
                 * @param {string} source - the source of the message (this canbe used for filtering out noise)
                 * @param {string} message - the message you are logging
                 */
                Logger.prototype.fatal = function (source, message) {
                    if (!this._enabled || !this.canLog(LogSeverity.FATAL)) {
                        return;
                    }
                    console.error("[DEBUG] " + source + " :: " + message);
                };
                // Internal methods
                Logger.prototype.canLog = function (severity) {
                    if (severity >= this._severity) {
                        return true;
                    }
                    return false;
                };
                return Logger;
            }());
            Logging.Logger = Logger;
            Logging.logger = new Logger();
        })(Logging = Core.Logging || (Core.Logging = {}));
    })(Core = Rn.Core || (Rn.Core = {}));
})(Rn || (Rn = {}));
var Rn;
(function (Rn) {
    var Core;
    (function (Core) {
        var Storage = (function () {
            function Storage() {
                return this;
            }
            Storage.prototype.getItem = function (key) {
                return localStorage.getItem(key);
            };
            Storage.prototype.setItem = function (key, data) {
                localStorage.setItem(key, data);
            };
            Storage.prototype.setJson = function (key, data) {
                localStorage.setItem(key, JSON.stringify(data));
            };
            Storage.prototype.getJson = function (key) {
                return JSON.parse(localStorage.getItem(key));
            };
            Storage.prototype.hasItem = function (key) {
                return localStorage.hasOwnProperty(key);
            };
            return Storage;
        }());
        Core.Storage = Storage;
    })(Core = Rn.Core || (Rn.Core = {}));
})(Rn || (Rn = {}));
//# sourceMappingURL=rn.core.js.map