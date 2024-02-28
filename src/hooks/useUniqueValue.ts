import { IProlductsDetails } from "../types/products";

const useUniqueValue = (arr: IProlductsDetails[]) => {
  const tmpArray: IProlductsDetails[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function itemCheck(item: any) {
    if (tmpArray.indexOf(item.id) === -1) {
      tmpArray.push(item.id);
      return true;
    }
    return false;
  }

  const uniqValue = arr.filter((item) => itemCheck(item));

  const size = 50;
  const subarray = [];

  for (let i = 0; i < Math.ceil(uniqValue.length / size); i++) {
    subarray[i] = uniqValue.slice(i * size, i * size + size);
  }

  return subarray;
};

export { useUniqueValue };
