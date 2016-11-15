namespace Rn.Core.Logging {
    export enum LogSeverity {
        TRACE = 1,
        DEBUG = 2,
        INFO = 3,
        WARN = 4,
        ERROR = 5,
        FATAL = 6
    }

    export interface ILogger {
        enableLogger(): void;
        disableLogger(): void;
        setLoggingSeverity(severity: LogSeverity): void;
        trace(source: string, message: string): void;
        debug(source: string, message: string): void;
        info(source: string, message: string): void;
        warn(source: string, message: string): void;
        error(source: string, message: string): void;
        fatal(source: string, message: string): void;
    }

    export class Logger implements ILogger {
        private _enabled: boolean = true;
        private _severity: LogSeverity = LogSeverity.WARN;

        public constructor() {
            // holder for now
        }

        /**
         * Enables the logger
         */
        public enableLogger(): void {
            this._enabled = true;
        }

        /**
         * Disables the logger
         */
        public disableLogger(): void {
            this._enabled = false;
        }

        /**
         * Set the logging severity for this logger instance - only messages matching the given severity (or greater) will be logged
         * @param {LogSeverity} severity - desired logging severity
         */
        public setLoggingSeverity(severity: LogSeverity): void {
            this._severity = severity;
        }

        /**
         * Logs a TRACE message from the logger for the specified source
         * @param {string} source - the source of the message (this canbe used for filtering out noise)
         * @param {string} message - the message you are logging
         */
        public trace(source: string, message: string): void {
            if (!this._enabled || !this.canLog(LogSeverity.TRACE)) {
                return;
            }

            console.log(`[TRACE] ${source} :: ${message}`);
        }

        /**
         * Logs a DEBUG message from the logger for the specified source
         * @param {string} source - the source of the message (this canbe used for filtering out noise)
         * @param {string} message - the message you are logging
         */
        public debug(source: string, message: string): void {
            if (!this._enabled || !this.canLog(LogSeverity.DEBUG)) {
                return;
            }

            console.log(`[DEBUG] ${source} :: ${message}`);
        }

        /**
         * Logs a INFO message from the logger for the specified source
         * @param {string} source - the source of the message (this canbe used for filtering out noise)
         * @param {string} message - the message you are logging
         */
        public info(source: string, message: string): void {
            if (!this._enabled || !this.canLog(LogSeverity.INFO)) {
                return;
            }

            console.info(`[DEBUG] ${source} :: ${message}`);
        }

        /**
         * Logs a WARN message from the logger for the specified source
         * @param {string} source - the source of the message (this canbe used for filtering out noise)
         * @param {string} message - the message you are logging
         */
        public warn(source: string, message: string): void {
            if (!this._enabled || !this.canLog(LogSeverity.WARN)) {
                return;
            }

            console.warn(`[DEBUG] ${source} :: ${message}`);
        }

        /**
         * Logs a ERROR message from the logger for the specified source
         * @param {string} source - the source of the message (this canbe used for filtering out noise)
         * @param {string} message - the message you are logging
         */
        public error(source: string, message: string): void {
            if (!this._enabled || !this.canLog(LogSeverity.ERROR)) {
                return;
            }

            console.error(`[DEBUG] ${source} :: ${message}`);
        }

        /**
         * Logs a FATAL message from the logger for the specified source
         * @param {string} source - the source of the message (this canbe used for filtering out noise)
         * @param {string} message - the message you are logging
         */
        public fatal(source: string, message: string): void {
            if (!this._enabled || !this.canLog(LogSeverity.FATAL)) {
                return;
            }

            console.error(`[DEBUG] ${source} :: ${message}`);
        }

        // Internal methods
        private canLog(severity: LogSeverity): boolean {
            if (severity >= this._severity) {
                return true;
            }

            return false;
        }
    }

    export let logger = new Logger();
}