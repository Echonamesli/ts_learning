//number
let dec: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

//boolean
let isDone: boolean = false;

//string
let str: string = "pink";

//字面量
let a: 10

//联合类型（用|连接）
let color: "red" | "blue" | "black";
color = "red"
color = "blue"
color = "black"

//any(任意类型) 声明变量如果不指定类型，则TS解析器会自动判断变量类型为any——隐式any
let d: any = 4;
d = "hello";
d = true;

//unknown(是类型安全的any，unknown变量不能赋值给其他变量)
let notSure: unknown = 4;
notSure = "hello";

//void（空值或者undefined）
let unusable: void = undefined;
function fnn(): void{  //该函数无返回值

}

//never(没有值，不能是任何值)
function err(message: string): never {
  throw new Error(message); //never表示永远不会返回结果
}

//object（没啥用）
let obj: object = {};
obj = function(){}

//{}用来指定对象中可以包含哪些属性
//属性名加?表示该属性可选
let obj2: {name: string, age?: number}
obj2 = {name:'沈月', age: 30}

//[propName: string]: any ————表示对象里可以有任意类型的属性
let obj3: {name: string, [propName: string]: any}
obj3 = {name:'沈月', age: 30, gender: '女'}

//array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//turple（元组，TS新增类型，即固定长度的数组）语法：[类型，类型，类型]
let x: [string, number];
x = ["hello", 10];

//enum（枚举，TS新增类型）
enum Colorr {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Colorr = Colorr.Green;


/* 
  设置函数结构的类型声明
      语法：（形参：类型，形参：类型....） => 返回值
*/
let dd: (a:number, b:number)=>number
dd = function(n1: number, n2: number): number{
  return n1+n2
}


//类型的别名type
type myString = string
type kk = 1|2|3|4|5
let k1: kk
let k2: kk
k1 = 3
k2 = 4

type myType = {
  name: string
  age: number
}
