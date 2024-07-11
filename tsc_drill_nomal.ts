{
  // 23
  type Touple = [number, null, string];
  const nums: Touple = [1, null, "Hello"];
}
{
  // 27
  // Promise型要復習
  type Func = {
    (func: () => void, second: number): string;
  };
}
{
  // 33
  // Promise型要復習
  const func = (): Promise<boolean> => {
    return new Promise((resolve) => {
      resolve(true);
    });
  };
}
{
  // 38
  type Post = {
    id: string;
    title: string;
    index: number;
  };

  type Comments = {
    id: string;
    title: string;
    content: string;
    wordCount: number;
  };

  type PostWithComments = Post & { comments: Comments[] };
  // インターセクション型要復習

  const postWithComments: PostWithComments = {
    id: "aaa",
    title: "testPost",
    index: 1,
    comments: [
      {
        id: "aaa",
        title: "hoge",
        content: "fuga",
        wordCount: 4,
      },
      {
        id: "bbb",
        title: "hoge2",
        content: "fuga2",
        wordCount: 4,
      },
    ],
  };
}
{
  // 39
  type TodoInput = {
    id: string;
    name: string;
    dueData?: string;
    readonly isDone: boolean;
  };
  // Readonly<T>という書き方もあった。https://typescriptbook.jp/reference/type-reuse/utility-types/readonly
  // as const との使い分け。
}
{
  // 37
  type User = {
    id: string;
    name: string;
  };

  type Post = {
    id: string;
    title: string;
    content: string;
  };

  type UserWithPosts = User & { posts: Post[] };

  const userWithPosts: UserWithPosts = {
    id: "aaa",
    name: "bob",
    posts: [
      {
        id: "aaa",
        title: "hoge",
        content: "fuga",
      },
      {
        id: "bbb",
        title: "hoge2",
        content: "fuga2",
      },
    ],
  };
}
{
  // 48
  const user = { id: 3, name: "bob" };
  type UserKey = keyof typeof user;
}
{
  // 49
  const user = { id: 3, name: "bob" } as const;
  type UserValue = keyof typeof user;
  // keyof~ はオブジェクト型のすべてのプロパティをユニオン型に直す。
  // typeof~ は~の部分にはオブジェクト名が入るが、そのオブジェクトのプロパティなどを取得する。
}
{
  // 50
  const fruits = ["apple", "orange", "lemon"];
  // type FruitsType = string[];
  type FruitsType = (typeof fruits)[number];
}
{
  type CurriculumLanguage = "JavaScript" | "TypeScript" | "React" | "Go";

  const printLearningLanguage = (lang: CurriculumLanguage) => {
    switch (lang) {
      case "JavaScript":
        console.log(`I'm learnig ${lang}`);
        break;
      case "TypeScript":
        console.log(`I'm learnig ${lang}`);
        break;
      case "React":
        console.log(`I'm learnig ${lang}`);
        break;
      default:
        // const neverValue: never = lang;
        // neverは値を持たないのに、goが引数langに代入されたら、上から処理されて、default内のneverValueに入るからエラーが起きる
        throw new Error(`${lang}はカリキュラムにない言語です`);
    }
  };
}
{
  // 53

  class ExhaustiveError extends Error {
    constructor(
      value: never,
      message = `${value}はカリキュラムにない言語です`
    ) {
      super(message);
    }
  }
  type CurriculumLanguage = "JavaScript" | "TypeScript" | "React" | "Go";

  const printLearningLanguage = (lang: CurriculumLanguage) => {
    switch (lang) {
      case "JavaScript":
        console.log(`I'm learnig ${lang}`);
        break;
      case "TypeScript":
        console.log(`I'm learnig ${lang}`);
        break;
      case "React":
        console.log(`I'm learnig ${lang}`);
        break;
      default:
      // throw new ExhaustiveError(lang);
    }
  };
  // classを作って型を確認する方法もあるよう。
}
{
  // 64
  const func1 = (x: string | number) => {
    if (typeof x === "string") {
      console.log(x.length);
    }
    if (typeof x === "number") {
      console.log(x.toString());
    }
  };
  const func2 = (x: number | number[]) => {
    if (typeof x === "number") {
      console.log(x.toString());
    }
    if (typeof x === "object") {
      // 配列はオブジェクトだから
      console.log(x.map((x) => x * 2));
    }
  };
}
{
  // 65
  type Person = {
    name: string;
    age: number;
    email?: string;
  };

  const getEmail = (person: Person): string | undefined => {
    if ("email" in person) {
      return person.email;
    } else {
      return undefined;
    }
  };
  // 後で復習する。
}
{
  // 66
  // inの使い方を確認する。
  type Success = { isSuccess: true; message: string };
  type Failure = { isSuccess: false; error: string };

  const res = (res: Success | Failure) => {
    if ("isSuccess" in res) {
      if (res.isSuccess === true) {
        console.log(res.message);
      } else {
        console.log(res.error);
      }
    }
  };
}
{
  // 67
  type Success = { isSuccess: true; message: string };
  type Failure = { isSuccess: false; error: string };

  const res = (res: Success | Failure) => {
    if (res.isSuccess === true) {
      console.log(res.message);
    } else {
      console.log(res.error);
    }
  };
}
{
  // 69
  const func = async () => {
    try {
      await fetch("http://a.com");
    } catch (error) {
      if (typeof error === "object") {
        console.log(error);
      }
    }
  };
}
{
  // 70
  const func = async () => {
    try {
      await fetch("http://a.com");
    } catch (error) {
      if (error instanceof Error) {
        // instanceofとtypeofの使い分け
        console.log(error.message);
      }
    }
  };
}
{
  // 72
  class HttpError extends Error {
    //ここにclassを作ってください
    status?: number;
    // ここにステータスコードがはいるのかな？
    // もし、400番,500番台のエラーが入る場合consoleに出力される処理？
  }

  const func = async () => {
    try {
      await fetch("http://a.com");
    } catch (error) {
      if (error instanceof HttpError) {
        if ("status" in error) {
          console.log(error.status);
        }
      }
    }
  };
}
{
  // 73
  // isの使い方を確認する
  const getString = (x: unknown): x is string => {
    return typeof x === "string";
  };

  const func = (x: unknown): string => {
    if (getString(x)) {
      return x;
    } else {
      return "";
    }
  };
}
{
  // 89
  type Person = {
    name: string;
    age: number;
    email: string;
  };

  type NewPersonProps = Pick<Person, "name" | "age">;
}
{
  // 90

  type Person = {
    name: string;
    age: number;
    email: string;
  };

  type NewPersonProps = Omit<Person, "name" | "email">;
}
{
  // 98;
  // readonlu別の書き方もあること確認
  type Person = {
    name: string;
    age: number;
    email: string;
  };

  type NewPerson = Readonly<Pick<Person, "name" | "email">>;
}
{
  // 99
  type Person = {
    name: string;
    age: number;
    email: string;
  };
  type NewPerosn = Partial<Pick<Person, "age" | "name">>;
}
{
  // 100
  type Person = {
    name: string;
    age: number;
    email: string;
  };

  type NewPerosn = Readonly<Omit<Person, "email">>;
}
{
  // 101
  // Recordってなに？後で確認
  type Person = Record<
    "firstName" | "lastName" | "age" | "email" | "address",
    string
  >;
  type PersonName = Pick<Person, "firstName" | "lastName">;
  type PersonInfo = Pick<Person, "age" | "email" | "address">;
}
{
  // 102 なにがなんだか全くわからない。
  let stringNumberObject: { [age: string]: number };

  stringNumberObject = { age: 36 }; //ok
  stringNumberObject.age = 36; //ok
  stringNumberObject["age"] = 36; //ok
  // stringNumberObject["age"] = "36"; //error
}
{
  let stringNumberObject: Record<string, number>;

  stringNumberObject = { age: 36 }; //ok
  stringNumberObject.age = 36; //ok
  stringNumberObject["age"] = 36; //ok
  // stringNumberObject["age"] = "36"; //error
}
{
  // 106 inの使いかた勉強。
  type Keys = "javascript" | "python";
  type Obj = {
    [key in Keys]: string;
  };
}
{
  // 112 ジェネリクスを勉強する。
  type Data<T> = {
    id: number;
    payload: T;
  };

  const data1: Data<number> = {
    id: 1,
    payload: 2,
  };

  const data2: Data<string> = {
    id: 1,
    payload: "hoge",
  };

  const data3: Data<{ name: string }> = {
    id: 1,
    payload: {
      name: "bob",
    },
  };
}
// 113~116まではまだやっていない。
