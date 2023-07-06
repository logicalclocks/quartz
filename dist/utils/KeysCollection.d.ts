declare class KeysCollection {
    map: WeakMap<object, string>;
    generateKeys: <T extends object>(data: T[]) => void;
    getKey: (item: object) => string;
}
declare const _default: KeysCollection;
export default _default;
