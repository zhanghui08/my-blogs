# ES6、ES7、ES8、ES9新特性：

## 1. ES6：
**1. 不一样的变量声明：const和let**

ES6推荐使用let声明局部变量，var全局变量(无论声明在何处，都会被视为声明在函数的最顶端)，let和var声明的区别：
```js
var x = '全局变量'
{
    let y = '局部变量' 
}
consoele.log(x) // 全局变量

//let 表示声明变量，而const表示声明常量，两者都为块级作用域；const声明的变量都会被认为是常量，它的值被设置完成后就不能在修改了。
    const a = 1
          a = 2 //报错

//如果const是一个对象，对象所包含的值是可以被修改的。
    const username = {name:'张三'}
    username.name = '李四' //不报错
    username = {name:'李四'}
```

**2. 模板字符串：`${}`**

```js
$("body").html(`This demonstrates the output of HTML content to the page, 
including student's ${name}, ${seatNumber}, ${sex} and so on.`);
```

**3. 箭头函数**

在ES6中，箭头函数就是function()的一种简写形式，使用括号包裹参数，跟随一个 =>，紧接着是函数体。
- 不需要 function 关键字来创建函数
- 省略 return 关键字
- 继承当前上下文的 this关键字

```js
//ES5
    var add = function(a,b) {
        return a + b
    }
//使用箭头函数
    var add = (a,b) => a + b;
    
//ES5
    [1,2,3].map((function(x){
        return x + 1
    }).bind(this))
//使用箭头函数
    [1,2,3].map(x => x + 1);
    
注意：当函数只有一个参数的时候，可以省略掉括号。当函数返回有且仅有一个表达式的时候可以省略 {} 和 return    
```

**4. 函数的参数默认值**

```js
//在ES6之前，这这样定义参数的默认值
    function printText(text){
        text = text || 'defaunt'
        console.log(text)
    }
    
//ES6
    function printText(text = 'default'){
        console.log(text)
    }
    printText('hello'); // hello 
    printText();// default
```

**5. 对象和数组解构**
```js
//对象
    const student = {
        name:'张三',
        age:22,
        sex:'男'
    }
//数组
    const student = ['张三',22,'男']

//ES5
    const name = student.name; 
    const age = student.age; 
    const sex = student.sex; 
    console.log(name + ' --- ' + age + ' --- ' + sex);
//ES6
    const { name, age, sex } = student; 
    console.log(name + ' --- ' + age + ' --- ' + sex);
```

**6. 对象超类**

ES6允许在对象中使用super方法：
```js
    var parent = {
        foo(){
            consoe.log('Hello word')
        }
    }
    
    var child = {
        foo(){
            super.foo()
            consoe.log('Hello word')
        }
    }
    Object.setPrototypeOf(child, parent); 
    child.foo(); // Hello from the Parent 
                 // Hello from the Child
```

**7. for...of 和 for...in**

for...of 用来遍历数组：
```js
let letter = ['a', 'b', 'c']; 
letter.size = 3; 
for (let letter of letters) { 
    console.log(letter); 
} // 结果: a, b, c
```
for...in 用来遍历对象：
```js
let stu = ['Sam', '22', '男']; 
stu.size = 3; 
for (let stu in stus) { 
    console.log(stu); 
} // 结果: Sam, 22, 男
```

**8. ES6中的类**

ES6中不支持class语法，不过ES6的class不是新的对象继承模型，它只是原型链的语法糖表达形式。

函数中使用static关键字定义构造函数的方法和属性：
```js
class Student {
    constructor() { 
        console.log("I'm a student."); 
    }
    study(){
        console.log('study!')
    }
    static read(){
        console.log('Reading Now.')
    }
}

console.log(typeof Student) //function
let stu = new Student()  //'I'm a student.'
    stu.study(); // "study!" 
    stu.read(); // "Reading Now."
```
类中的继承和超集：
```js
class Phone {
    constructor() { 
        console.log("I'm a phone."); 
    }
}
class MI extends Phone {
    constructor(){
        super()
        console.log("I'm a phone designed by xiaomi");
    }
}
let mi8 = new MI();
```
extends允许一个子类继承父类，需要注意的是，子类的constructor函数中需要执行 super()函数。当然，也可以在子类方法中调用父类的方法，如super.parentMethodName()。

## 2. ES7：
**1. includes() ： 判断数组是否含有特定的值**

以前可能用到更多的是` indexOf `的方式，有则返回查找值得下标，没有则返回-1
```js
const arr = [1,2]
      arr.indexOf(2) //1
```
而 ` includes ` 则直接返回Boolean值，不返回值的下标，更纯粹是用于判断值得数组包含与否
```js
const arr = [1,2]
      arr.includes(2) //true
      arr.includes(5) //false
```
**2. 指数操作符号**

如果需要进行指数得计算，在以前需要怎么实现?
例如：输出2的10次方，除了自定义递归方法去实现以外，可以用 ` Math.pow `函数实现
```js
Path.pow(2,10) //1024
```
而在ES7中新增了指数的操作符 ** ，可以更方便去进行指数运算
```js
2**10 //1024
```

## 3. ES8：

**1. async/await - 异步操作关键字**

为了解决回调地狱的问题，Promise是个不错的解决方案，但在处理复杂流程的场景，Promise欠缺了一定的语义化，各个流程通过 .then 连接，读起代码来较为复杂
设想一次个场景：用户登录的操作，在用户请求完登录接口并验证通过后，在请求用户信息接口获取用户信息，Promise实现方式如下：
```js
userLogin(data)
        .then(res =>{
            return getUserInfo(res.token)
        })
        .then(res =>{
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
```
如果流程比较复杂的话，then连接会更多，直到最后的catch，这对于代码维护增加了不少阅读成本，不能够很好的表达执行流程。

于是便有了async/await，即可以用同步代码的方式去实现，又可以异步处理的关键字，还支持 try catch捕获异常，两者不能脱离开来单独使用，await后面一定是Promise对象，否则，它将会自动的包装成一个Promise对象。
```js
try {
    let loginRse = await userLogin(data)
    let res = await getUserInfo(loginRes.token)
    console.log(res)
} catch (err) {
    console.error(err)
}
```
**2. valuse()/entries() - 遍历对象新方式**

ES7新增了两个对象遍历方法：Object.values()和Object.entries()。返回一个数组，包含对象自身的所以可遍历的属性值，示例：
```js
const user = {name:'Sam',age:'25'}
    Object.values(user) //['Sam','25']

const obj = {100:'a', 8:'b', 60:'c'}
    Object.values(obj) //['b','c','a']
//注意：如果属性名为数值属性，是按照数值大小，从小到大遍历的，因此返回的顺序是b,c,a；Object.entries()同样返回一个数组，包含对象自身的所有可比安利的键值和属性的成组。    
```
```js
const user = {name: "Sam", age: "25"}
Object.entries(user) // [["name", "Sam"], ["age", "25"]]

const obj = { 100: 'a', 2: 'b', 7: 'c' };
Object.entries(obj) // [["2", "b"], ["7", "c"], ["100", "a"]]
```

## 4. ES9：

**1. Promise.finally() - Promise结束触发**

当我们在调用Promise时，下一个结果要么是 `.then` ，要么是触发 `.catch()`。这样导致有些代码需要在这两处重复写两遍，导致代码冗余，如果希望Promise不管是成功或者失败，都执行同样的代码，可以使用 `.finally` ，它允许你在执行结束后触发。示例：
```js
function login(){
    userLogin()
    .them=n(res =>{
        console.log(res)
    })
    .catch(err =>{
        console.log(err)
    })
    finally(() =>{
        console.log('finally')
    })
}
```
## 5. JS相关：
**时间格式的转换函数：**

中国标准时间，即，例如：Wed Oct 24 2018 20:00:00 GMT+0800\
转换为：yyyy-MM-dd格式，即：2018-10-24
```js
 methods:{
   dateFormat(dateData) {
      var date = new Date(dateData)
      var y = date.getFullYear()
      var m = date.getMonth() + 1
      m = m < 10 ? ('0' + m) : m
      var d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      const time = y + '-' + m + '-' + d
      return time
    }
 }
```