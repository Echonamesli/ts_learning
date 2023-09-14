/* 
    接口的作用类似于抽象类，不同点在于：接口中的所有方法和属性都是没有实值的，换句话说接口中的所有方法都是抽象方法；

    接口可以在定义类的时候去限制类的结构
    接口中的所有的属性都不能有实际的值
    接口只定义对象的结构，而不考虑实际值
    在接口中所有的方法都是抽象方法

*/


/*  
    用途一：
        接口可以用于检查某一个对象类型
*/
interface Per{
  name: string;
  sayHello():void;
}

function fn(per: Per){
  per.sayHello();
}

fn({name:'孙悟空', sayHello() {console.log(`Hello, 我是 ${this.name}`)}});




/* 
    用途二：
        定义类时，可以使类去实现一个接口，实现接口就是使类去满足接口的要求
*/
interface Personn {
  name: string;
  sayHello(): void;
}

class Student implements Personn {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    console.log("大家好，我是" + this.name);
  }
}
