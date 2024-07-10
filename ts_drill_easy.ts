{
  // 3
  let isShow: boolean = true;
  let isEditing: boolean = false;
}
{
  // 4
  let count: number = 15;
  let num: number = 2;
  let float: number = 2.33;
}
{
  // 5
  let firstName: string = "tarou";
  let lastName: string = "Yamada";
  let englishName: string = "mad";
}
{
  // 6
  let isShow: boolean = true;
  let count: number = 15;
  let firstName: string = "tarou";
}
{
  // 7
  let x: null = null;
}
{
  // 8
  let y: undefined = undefined;
}
{
  // 9
  let x: any = "hello";
  x = 1;
  x = undefined;
  x = [];
}
{
  // 10
  let x: never;
  // 値を持たないという意味。変数xには何も代入できない。
  // x = 1;
}
{
  // 12
  type IsShow = boolean;
  let isShow: IsShow = true;

  // 型エイリアスを使って型エラーを解消しよう
  // 型エイリアスは、名前の付いた型を型エイリアスと呼ぶ
  type Count = number;
  let count: Count = 15;

  type FirstName = string;
  let firstName: FirstName = "tarou";

  type LastName = string;
  let lastName: LastName = "suzuki";
}
{
  // 13
  let isShow = true;
  let count = 15;
  let firstName = "tarou";

  // 推論された型に合う値を入れてください
  isShow = true;
  count = 20;
  firstName = "aaa";
}
{
  // 17
  type Person = {
    name: string;
    age: number;
  };

  const taro: Person = { name: "tarou", age: 30 };
  const jiro: Person = { name: "jiro", age: 22 };
}
{
  // 18

  type Person = {
    name: string;
    age: number;
    email: undefined | string;
  };

  const taro: Person = {
    name: "tarou",
    age: 30,
    email: undefined,
  };
  const jiro: Person = {
    name: "jiro",
    age: 22,
    email: "jiro@code-lesson.com",
  };
}
{
  // 19
  type Person = {
    name: string;
    age: number;
    email?: string;
  };

  const taro: Person = { name: "tarou", age: 30 };
  const jiro: Person = { name: "jiro", age: 22, email: "jiro@code-lesson.com" };
}
{
  // 20
  type BasicInfo = {
    name: string;
    age: number;
  };

  type AdditionalInfo = {
    email: string;
  };

  type newProfile = BasicInfo & AdditionalInfo;

  const person: newProfile = {
    name: "taro",
    age: 20,
    email: "taro@taro.com",
  };
}
{
  // 21
  type Fruits = string[];
  const fruits: Fruits = ["apple", "orange", "lemon"];

  type Nums = number[];
  const nums: Nums = [1, 2, 3];
}
{
  // 24

  const main = (num: number) => {
    return num + num;
  };
  console.log(main(15)); //30
}
{
  // 25
  const func1 = (str: string): string => "hello" + str;
  const func2 = (str: string): number => ["hello"].push(str);
  // pushメソッドは、配列の要素数を返す関数だから。
  const func3 = (str: string): void => console.log("hello" + str);
  // console.logは副作用として扱われ、関数の戻り値とみなされない。すなわち、返り値がないのでvoid
}
{
  // 26
  const func1: (num: number) => number = (num) => num * 2;
  const func2: (num: number) => string = (num) => num + "px";
}
{
  // 30
  type Hello = "hello";
  const hello: Hello = "hello";
}
{
  // 31
  type NumberOrString = number | string;
  const num: NumberOrString = 1;
  const str: NumberOrString = "1";
}
{
  // 32
  type Fruit = "apple" | "orange" | "lemon"; // stringは使わない

  const fruit1: Fruit = "apple";
  const fruit2: Fruit = "orange";
  const fruit3: Fruit = "lemon";
}
{
  // 34
  type Person = {
    readonly name: string;
    readonly age: number;
    readonly email: string;
  };
}
// readonlyは特定のプロパティに対して、as constはオブジェクトや配列全体に対して。
{
  // 35
  const LANGUAGE = {
    ENGLISH: "ENGLISH",
    JAPANESE: "JAPANESE",
    CHINESE: "CHINESE",
  } as const;

  console.log(LANGUAGE.JAPANESE);
}
{
  // 47
  let isShow = true;
  let count = 15;
  const firstName = "tarou";
  const sports = ["tennis", "soccer"];
  const user = { id: 1, name: "jiro" };

  type IsShow = typeof isShow;
  type Count = typeof count;
  type FirstName = typeof firstName;
  type Sports = typeof sports;
  type User = typeof user;
}
{
  // 58
  // 型アサーションは自信ないので後で見直す。
  const func = (x: unknown) => {
    const str: string = x as string;
    const num: number = x as number;
    const bool: boolean = x as boolean;
  };
}
{
  // 59
  const func1 = (x: string | null) => {
    const str: string = x as string;
  };
  const func2 = (x: number | undefined) => {
    const num: number = x as number;
  };
}
{
  // 60
  const func1 = (x: string | null) => {
    const str: string = x!;
  };
  const func2 = (x: number | undefined) => {
    const num: number = x!;
  };
  // ！を使用することで、絶対にnullやundefinedではないことを保証する。
}
{
  const func1 = (x: string | null) => {
    if (x !== null) {
      console.log(x.length);
    }
  };
  const func2 = (x: number | undefined) => {
    if (x !== undefined) {
      console.log(x.toString());
    }
  };
}
{
  type Person = {
    name?: string;
    age?: number;
    email?: string;
  };
}
{
  type Person = {
    name?: string;
    age?: number;
    email?: string;
  };
  // ユーティリティ型として全て必須にする場合は、
  // Requiredで＜＞は当てはめたいオブジェクト型を書く。
  const person: Required<Person> = {
    name: "taro",
    age: 20,
    email: "hiroyuki293@icloud.com",
  };
}
{
  type Person = {
    name: string;
    age: number;
    email: string;
  };

  type NewName = Pick<Person, "name" | "age">;
}
{
  type Person = {
    name: string;
    age: number;
    email: string;
  };

  type NewPerson = Omit<Person, "name">;
}
{
  type Person = {
    name: string;
  };
}

{
  type Person = {
    readonly name: string;
    readonly age: number;
    readonly email: string;
  };
}
{
  type TypeA = number | string | null;
  type TypeB = number | number[] | null;

  type NewType = Extract<TypeA, TypeB>;
}
{
  type TypeA = number | string | null;

  type NewType = Exclude<TypeA, string>;
}
{
  const func = (a: string, b: string) => {
    return a + b;
  };
  type TypeA = Parameters<typeof func>;
}
{
  const func = () => {
    return {
      name: "taro",
      age: 25,
      email: "taro@example.com",
    };
  };

  type Person = ReturnType<typeof func>;
}
