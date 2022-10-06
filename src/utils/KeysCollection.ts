/*
 * It created to prevent user passing keys in every row in the Editable table component
 * */
class KeysCollection {
  map = new WeakMap<object, string>();

  generateKeys = <T extends object>(data: T[]) => {
    data.forEach((item) => {
      this.map.set(item, Math.random().toString(32));
    });
  };

  getKey = (item: object): string => {
    return this.map.get(item) ?? Math.random().toString(32);
  };
}

export default new KeysCollection();
