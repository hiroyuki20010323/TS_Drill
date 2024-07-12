const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  } else {
    return "" + a + b;
  }
};

const result: string = addOrConcat(1, 2, "concat") as string;
console.log(result);

// 型推論で推論されている型とは別の型を定義したいときに使用する。
// ＊別の定義を推論するなという議論もあるよう
// htmlはそれぞれのタグに固有の型があるよう。divタグの場合、HTMLDivElementなど
