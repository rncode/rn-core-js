namespace Rn.Core {
    export class Storage implements IStorage {
        public constructor() {
            return this;
        }

        public getItem(key: string): any {
            return localStorage.getItem(key);
        }

        public setItem(key: string, data: string): void {
            localStorage.setItem(key, data);
        }

        public setJson(key: string, data: any): void {
            localStorage.setItem(key, JSON.stringify(data));
        }

        public getJson(key: string): any {
            return JSON.parse(localStorage.getItem(key));
        }

        public hasItem(key: string): boolean {
            return localStorage.hasOwnProperty(key);
        }
    }
}