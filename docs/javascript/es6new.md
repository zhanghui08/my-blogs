# 前言
    ES6虽然提供了许多特性，但是在实际工作中使用到的频率并不多。认真总结常用的。

## 1. 块级作用域
ES6提供了let和const来代替var声明变量：
- 不需要立即执行的函数表达式
- 在循环体内的闭包不会在有问题
- 防止重复声明变量

## 2. 数组的扩展
1. Array.from() 将伪数组对象或可遍历对象转换为真数组
2. bindArray.of(v1,v2,v3) 将一系列数值转换成数组
3. bindArray数组实例的 find()和 findlndex()
   数组实例的find()方法：用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined

   ```js
   [1,4,-5,10].find((n) => n<0) //-5
   ```

   数组实例的findlnex方法的用法与find方法非常类似，返回第一个符合条件的数组成员位置，如果所有成员都不符合条件，则返回 -1.
   ```js
   [1,5,10,15].findIndex(function(value,index,arr){
       return value >9
   })  //2
   ```
4.  数组实例的includes()
    Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值。该方法的第二个参数表示搜索的起始位置，默认为0；如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度(比如第二个参数为 -4，但数组长度为3)，则会重置为从0开始。
    ```js
    [1, 2, 3].includes(2)   // true
    [1, 2, 3].includes(3, -1); // true
    [1, 2, 3, 5, 1].includes(1, 2); // true
    ```
    在该方法之前，我们通常使用数组的indexOf方法，检查是否包含某个值。indexOf方法有2个缺点，一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达不够直观。二是，它内部使用严格相等运算符符(===)进行判断，这会导致对NaN的误判。
    ```js
    [NaN].indexOf(NaN)  //-1
    [NaN].includes(NaN)  //true
    ```
5. 数组实例的 entries(),keys(),values()
    用于遍历数组，他们都是返回一个变量对象，可以用for...or循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历
    ```js
    for(let index of ['a','b'].keys()){
        console.log(index)
    }
    // 0
    // 1
    for(let elem of ['a','b'].values()){
        console.log(elem)
    }
    // 'a'
    // 'b'
    for(let [index,elem] of ['a','b'].entries()){
        console.log(index,elem)
    }
    // 0 'a'
    // 1 'b'
    ```
## 3. 箭头函数
ES6允许使用“箭头”(=>)定义函数。它主要有2个作用：缩减代码合改变this指向，
1. 缩减代码
    ```js
    const doube1 = function(number){
        return number *2  //ES5写法
    }
    const doube2 = (number) =>{
        return number *2  //ES6写法
    }
    const doube3 = number => number *2  //可以进一步简化
    ```
    
    多个参数记的加括号
    ```js
    const doube4 = (number,number2) => number + number2
    ```
    如果箭头函数的代码块部分多余一条语句，就要用大括号将它们扩起来，并且使用return语句返回
    ```js
    const deubel = (number,number1) =>{
        sum = number + number1
        return sum
    }
    ```
    简化回调函数
    ```js
    //正常函数写法
    [1,2,3].map(function(x){
        return x * x
    })
    //箭头函数写法
    [1,2,3].map(x => x * x)  //[1,4,9]
    ```
2. 改变this指向
长期以来，JavaScript语言的this对象一直是一个令人头痛的问题，在对象方法中使用this，必须得小心。剪头函数“绑定”this，很大程度上解决了这个困扰。
    ```js
   const team = {
       members:["Henry","Elyse"],
       teamName:"es6",
       teamSummary:function(){
           return this.members.map(function(member){
               return `${member}隶属于${this.teamName}小组`;    // this不知道该指向谁了
           })
       }
   }
   console.log(team.teamSummary());//["Henry隶属于undefined小组", "Elyse隶属于undefined小组"]
    ```
    teamSummary函数里面又嵌了个函数，这导致内部的this的指向发生了错乱。
    
    **如何修改：**
    
    方法一：let self = this
    ```js
   const team = {
       members:["Henry","Elyse"],
       teamName:"es6",
       teamSummary:function(){
           let self = this;
           return this.members.map(function(member){
               return `${member}隶属于${self.teamName}小组`;
           })
       }
   }
   console.log(team.teamSummary());//["Henry隶属于es6小组", "Elyse隶属于es6小组"]
    ```
    方法二：bind函数
    ```js
   const team = {
       members:["Henry","Elyse"],
       teamName:"es6",
       teamSummary:function(){
           return this.members.map(function(member){
               return `${member}隶属于${self.teamName}小组`;
           }.bind(this))
       }
   }
   console.log(team.teamSummary());//["Henry隶属于es6小组", "Elyse隶属于es6小组"]
    ```
    方法三：箭头函数
    ```js
   const tema = {
       members:["Henry","Elyse"],
       teamName:"es6",
       teamSummary:function(){
           return this.nembers.map((member) =>{
               //this指向就是tema对象
               return `${member}隶属于${self.teamName}小组`;
           })
       }
   }
   console.log(team.teamSummary());//["Henry隶属于es6小组", "Elyse隶属于es6小组"]
    ```
3. 使用注意点
    - 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
    - 不可以当做构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
    - 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用rest参数替代。
    - 不可以使用yield命令，因此箭头函数不能用作Genartor函数。
## 4. 使用 new Array.fill()创建数组
```js
//  创建二维数组
    let arr = new Array(5).fill([])
    console.log(arr)  //[ [],[],[],[],[] ]
    
//  创建初始元素为0 的输出
    let arr = new Array(5).fill([])
    console.log(arr)  //[0,0,0,0,0]
```

## 5. 使用reduce()进行数组元素的累和、累积、以及异或运算
该方法对数组中的每个元素按顺序执行一个由你提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
```js
//  对数组元素镜像累加的运算
    let arr = [1,2,3,4,5]
    let sum = arr.reduce((a,b)=>a+b)
    console.log(sum)  //15
    
//  对数组进行累积计算
    let arr = [1,2,3,4,5]
    let res = arr.reduce((a,b) =>a*b)
    console.log(res)  //120
```

## 6. 使用map()进行数组元素的统一操作
该方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
```js
//  对数组中所有元素进行 *2操作
    let arr = [1,2,3,4,5]
        arr= arr.map(item =>item*2)
        console.log(arr)  //[2,4,6,8,10]
```

## 7. 使用 filter()来过滤数组中你想获得的元素
该方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素。
```js
//  过滤数组中的偶数
    let arr = [1,4,6,3,7,9,3,6]
        arr = arr.filter(item =>item%2 ==0)
        console.log(arr)  //[4,6,6]
        
//  取2个数组的交集部分
    let arr1 = [1,4,6,3,7,9,3,6] 
    let arr2 = [3,7,9]
    let res = arr1.filter(item =>arr2.includes(item))
    console.log(res)  //[3,7,9,3]
    
//  取2个数组的差
    let arr1 = [1,4,6,3,7,9,3,6] 
    let arr2 = [3,7,9]
    let res = arr1.filter(item =>!arr2.includes(item))
    console.log(res)  //[1,4,6,6]
```

## 8. 使用Array.from()将类似数组转换为数组
该方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例，

类数组解释：拥有长度length和若干索引index的对象。
```js
    let arr = 'abc'
        str = Array.from(str)
        console.log(str)  //['a','b','c']
```

## 9. 使用Set()对数组元素进行去重
Set对象允许你存储任何类型的唯一值，无论是【原始值】或者是对象引用
```js
    let arr1 = [2,2,2,2,4,4,4,2,2,3]
        arr1 = new Set(arr1)
        console.log(arr1)  //Set(3){2,4,3}
```

## 10. Object.entrise()将对象转换为数组，可以通过索引取当中的值
该方法返回一个给定对象自身可枚举属性的键值对数组。
```js
    let obj = {
        a:1,
        b:2,
        c:3
    }
    obj = Object.entrise(obj)
    console.log(obj)  //[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
```

## 11. 使用sort()对对象的键值对进行排序，特定情况下也许可以方便取值
先通过Object.enteries()将对象转换为键值对数组，对键值对数组中的值进行排序来达到目的。
```js
    let obj = {
        a: 6, 
        b: 4, 
        c: 3, 
        d: 5, 
        g: 8
    }
    obj = Object.entrise(obj)  //[ [ 'a', 6 ], [ 'b', 4 ], [ 'c', 3 ], [ 'd', 5 ], [ 'g', 8 ] ]
    obj.sort((a,b) =>b[1] - a[1])  // [ [ 'g', 8 ], [ 'a', 6 ], [ 'd', 5 ], [ 'b', 4 ], [ 'c', 3 ] ]
    console.log(obj[0][1])  //8
```