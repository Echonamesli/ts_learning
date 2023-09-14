/* 
    定义一个函数或类时，有些情况下无法确定其中要使用的具体类型（返回值、参数、属性的类型不能确定）；

    此时泛型便能够发挥作用

    下例中，test函数有一个参数类型不确定，但是能确定的时其返回值的类型和参数的类型是相同的；
    由于类型不确定所以参数和返回值均使用了any，但是很明显这样做是不合适的：
    首先使用any会关闭TS的类型检查，其次这样设置也不能体现出参数和返回值是相同的类型； 

    function test(arg: any): any{
        return arg;
    }
*/


/* 
    这里的<T>就是泛型；

    T是我们给这个类型起的名字（不一定非叫T），设置泛型后即可在函数中使用T来表示该类型；

    所以泛型其实很好理解，就表示某个类型； 
*/


/* 
    创建泛型函数 
*/
function test<T>(arg: T): T{
  return arg;
}

test(10)          //使用泛型函数方法一（直接使用）

test<number>(10)  //使用泛型函数方法二（指定类型）




/* 
    函数中可以使用多个泛型，多个泛型间使用逗号隔开 
*/
function test2<T, K>(a: T, b: K): K{
  return b;
}

test2<number, string>(10, "hello");



/* 
    泛型类
        类中同样可以使用泛型
*/

class MyClass<T>{
  prop: T;

  constructor(prop: T){
      this.prop = prop;
  }
}


/* 
    泛型继承
        除此之外，也可以对泛型的范围进行约束
        
        T extends MyInter表示泛型T必须是MyInter的子类，不一定非要使用接口类和抽象类同样适用
*/

interface MyInter{
  length: number;
}

function testttt<T extends MyInter>(arg: T): number{
  return arg.length;
}