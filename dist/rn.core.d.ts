declare namespace Rn.Core {
    interface IStorage {
        getItem(key: string): any;
        setItem(key: string, data: string): void;
        setJson(key: string, data: any): void;
        getJson(key: string): any;
        hasItem(key: string): boolean;
    }
}
declare namespace Rn.Core.Logging {
    enum LogSeverity {
        TRACE = 1,
        DEBUG = 2,
        INFO = 3,
        WARN = 4,
        ERROR = 5,
        FATAL = 6,
    }
    class Logger {
        private _enabled;
        private _severity;
        constructor();
        /**
         * Enables the logger
         */
        enableLogger(): void;
        /**
         * Disables the logger
         */
        disableLogger(): void;
        /**
         * Set the logging severity for this logger instance - only messages matching the given severity (or greater) will be logged
         * @param {LogSeverity} severity - desired logging severity
         */
        setLoggingSeverity(severity: LogSeverity): void;
        /**
         * Logs a TRACE message from the logger for the specified source
         * @param {string} source - the source of the message (this canbe used for filtering out noise)
         * @param {string} message - the message you are logging
         */
        trace(source: string, message: string): void;
        /**
         * Logs a DEBUG message from the logger for the specified source
         * @param {string} source - the source of the message (this canbe used for filtering out noise)
         * @param {string} message - the message you are logging
         */
        debug(source: string, message: string): void;
        /**
         * Logs a INFO message from the logger for the specified source
         * @param {string} source - the source of the message (this canbe used for filtering out noise)
         * @param {string} message - the message you are logging
         */
        info(source: string, message: string): void;
        /**
         * Logs a WARN message from the logger for the specified source
         * @param {string} source - the source of the message (this canbe used for filtering out noise)
         * @param {string} message - the message you are logging
         */
        warn(source: string, message: string): void;
        /**
         * Logs a ERROR message from the logger for the specified source
         * @param {string} source - the source of the message (this canbe used for filtering out noise)
         * @param {string} message - the message you are logging
         */
        error(source: string, message: string): void;
        /**
         * Logs a FATAL message from the logger for the specified source
         * @param {string} source - the source of the message (this canbe used for filtering out noise)
         * @param {string} message - the message you are logging
         */
        fatal(source: string, message: string): void;
        private canLog(severity);
    }
    let logger: Logger;
}
declare namespace Rn.Core {
    class Storage implements IStorage {
        constructor();
        getItem(key: string): any;
        setItem(key: string, data: string): void;
        setJson(key: string, data: any): void;
        getJson(key: string): any;
        hasItem(key: string): boolean;
    }
}
