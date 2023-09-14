/* 类型断言

有些情况下，变量的类型对于我们来说是很明确，但是TS编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式

两种语法：
        变量 as 类型
        <类型>变量

*/
let e: unknown
let s: string
e = 'shenyue'
s = e as string
s = <string>e