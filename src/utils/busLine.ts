export const getLineNumber = (busLine: number) => {
  const stringNum = busLine.toString();

  if (stringNum.slice(0, 3) === "100") {
    return parseInt(stringNum.slice(-2), 10);
  }
  if (stringNum.slice(0, 2) === "10") {
    return parseInt(stringNum.slice(-3), 10);
  }
};
