class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`大家好，我是${this.name}`);
  }
}

const p = new Person("孙悟空", 18);
p.sayHello();

/* 
      注1：在TS中只能有一个构造器方法！
      注2：子类继承父类时，必须调用父类的构造方法（如果子类中也定义了构造方法）！
 */

class A {
  protected num: number;
  constructor(num: number) {
    this.num = num;
  }
}

class X extends A {
  protected name: string;
  constructor(num: number, name: string) {
    super(num); //继承，如果在X类中不调用super将会报错！
    this.name = name;
  }
}

/* 
  封装
      默认情况下，对象的属性是可以任意的修改的，为了确保数据的安全性，在TS中可以对属性的权限进行设置

      静态属性（static）：

          声明为static的属性或方法不再属于实例，而是属于类的属性；

      只读属性（readonly）：

          如果在声明属性时添加一个readonly，则属性便成了只读属性无法修改

      TS中属性具有三种修饰符：

          public（默认值），可以在类、子类和对象中修改
          protected ，可以在类、子类中修改
          private ，可以在类中修改
*/

//public：
class Person1 {
  public name: string; // 写或什么都不写都是public
  public age: number;

  constructor(name: string, age: number) {
    this.name = name; // 可以在类中修改
    this.age = age;
  }

  sayHello() {
    console.log(`大家好，我是${this.name}`);
  }
}

class Employee1 extends Person {
  constructor(name: string, age: number) {
    super(name, age);
    this.name = name; //子类中可以修改
  }
}

const p1 = new Person1("孙悟空", 18);
p1.name = "猪八戒"; // 可以通过对象修改

//protected：
class Person2 {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name; // 可以修改
    this.age = age;
  }

  sayHello() {
    console.log(`大家好，我是${this.name}`);
  }
}

class Employee2 extends Person2 {
  constructor(name: string, age: number) {
    super(name, age);
    this.name = name; //子类中可以修改
  }
}

const p2 = new Person2("孙悟空", 18);
p2.name = "猪八戒"; // 不能修改

//private：
class Person3 {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name; // 可以修改
    this.age = age;
  }

  sayHello() {
    console.log(`大家好，我是${this.name}`);
  }
}

class Employee3 extends Person3 {
  constructor(name: string, age: number) {
    super(name, age);
    this.name = name; //子类中不能修改
  }
}

const p3 = new Person3("孙悟空", 18);
p3.name = "猪八戒"; // 不能修改

/* 
  属性存取器：

      对于一些不希望被任意修改的属性，可以将其设置为private

      直接将其设置为private将导致无法再通过对象修改其中的属性

      我们可以在类中定义一组读取、设置属性的方法，这种对属性读取或设置的属性被称为属性的存取器

      读取属性的方法叫做setter方法，设置属性的方法叫做getter方法
*/

class Person4 {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }
}

const p4 = new Person4("孙悟空");
// 实际是通过调用getter方法读取name属性
console.log(p4.name);
// 实际是通过调用setter方法修改name属性
p4.name = "猪八戒";

/* 
    静态属性：

        静态属性（方法），也称为类属性。使用静态属性无需创建实例，通过类即可直接使用

        静态属性（方法）使用static开头

        this————在类中，使用this表示当前对象
*/
class Tools {
  static PI = 3.1415926;

  static sum(num1: number, num2: number) {
    return num1 + num2;
  }
}

console.log(Tools.PI);
console.log(Tools.sum(123, 456));

/*  
      继承

          继承时面向对象中的又一个特性

          通过继承可以将其他类中的属性和方法引入到当前类中
*/
class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name}在汪汪叫！`);
  }
}

const dog = new Dog("旺财", 4);
dog.bark();

/* 
  重写
      发生继承时，如果子类中的方法会替换掉父类中的同名方法，这就称为方法的重写
*/
class Animall {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  run() {
    console.log(`父类中的run方法！`);
  }
}

class Dogg extends Animall {
  bark() {
    console.log(`${this.name}在汪汪叫！`);
  }

  run() {
    console.log(`子类中的run方法，会重写父类中的run方法！`);
  }
}

const dogg = new Dogg("旺财", 4);
dogg.bark();

/* 
    抽象类（abstract class）
        抽象类是专门用来被其他类所继承的类，它只能被其他类所继承不能用来创建实例


        使用abstract开头的方法叫做抽象方法，抽象方法没有方法体只能定义在抽象类中，继承抽象类时抽象方法必须要实现;
*/
abstract class Ann {
  abstract run(): void;
  bark() {
    console.log("动物在叫~");
  }
}

class Doo extends Ann {
  run() {
    console.log("狗在跑~");
  }
}
