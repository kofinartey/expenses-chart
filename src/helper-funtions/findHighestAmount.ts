import { dataType } from "../types/dataType";

const findHighestAmount = (arr: dataType[]) => {
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].amount > highest) {
      highest = arr[i].amount;
    }
  }
  return highest;
};

export default findHighestAmount;
