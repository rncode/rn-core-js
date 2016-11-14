namespace Rn.Core {
    export interface IStorage {
        getItem(key: string): any;
        setItem(key: string, data: string): void;
        setJson(key: string, data: any): void;
        getJson(key: string): any;
        hasItem(key: string): boolean;
    }
}