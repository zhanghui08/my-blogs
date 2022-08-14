****
**首先是向下兼容：Vue3支持大多数Vue2特性，也可以使用vue2语法开发**
**性能的提升：官方给出的数据是，打包大小减少41%、初次渲染快55%、更新快133%、内存使用减少54%**
**更好TypeScript支持，Vue3 的源代码就是使用TypeScript进行开发的。所以在新的版本上使用TS也更加顺畅无阻** 
## 1. Composition-api
Vue在2.x中编写代码要按照一定的模板，比如数据就只能放在data()中，方法只能放在methods中，按照模板编写代码对于新手来讲可能是好事，但是一旦项目变大，维护起来就显得很困难。
如果组件逻辑复杂，代码量多，我们添加新代码不光要不停的上下滑动，而且在后期代码维护中，阅读起来也变得十分的困难，因为实现一种功能的代码并没有集中在一起。另外就是作为一个新接手的开发人员，在茫茫的 method、data、computed 等选项中一目了然的发现这个变量是属于哪个功能是比较困难的 。

而在Composition-api中，我们可以把实现一种功能的代码写在一起，甚至还可以把它们单独抽取在一个js文件或者一个函数中。在js文件中也可以引用Composition-api的生命周期函数。这将极大的提高代码的可维护性。这样就可以更好的提取和重用多个组件之间的逻辑。

优劣比较：
-  在逻辑组织和逻辑复用方面，Composition API是优于Options API，因为Composition API几乎是函数，会有更好的类型推断。
-  Composition API对 tree-shaking 友好，代码也更容易压缩。
-  Composition API中见不到this的使用，减少了this指向不明的情况。
-  如果是小型组件，可以继续使用Options API，也是十分友好的。

## 2. Setup
setup函数是一个新的组件选项，作为在组件内使用Composition Api的入口点。新的setup选项在组件被创建之前执行，一旦props被解析完成，它就将作为组合式api的入口。

-  setup函数的参数
    -  它主要有2个参数：props/context
    -  其实就是父组件传递过来的属性会被放到props对象中，我们在setup中如果需要使用，那么就可以通过props参数获取。
        -  对于定义props的类型，还是和之前一样，在props选项中定义
        -  并且在template中可以正常去使用props中的属性，
        -  如果在setup函数中想要使用props，不可以通过this去获取
        -  因为props有直接作为参数传递到setup函数中，可以直接通过参数来使用即可

    - 另外一个参数是context，也称之为是一个SetupContext，它里面包含三个属性
        - attrs：所有的非props的attribute
        - slots：父组件传递过来的插槽（这个在以渲染函数返回时会有作用）
        - emit：在组件内部需要发出事件时会用到emit

- setup函数的返回值
    -  返回值可以在模板temolate中使用、也就是是说可以通过setup的返回值来替代data选项
- setup中不可以使用this
    - 表达的含义是this并没有指向当前组件实例，
    - 在setup被调用之前，data、computed、methods等都没有被解析，

## 3. Ref 和 Reactive
- Ref：创建一个基本类型的变量，有一个 .value属性，可以通过其对值进行读取或修改
- Reactive：创建的是一个对象或者数组类型，如果是数组类型会转换成proxy对象
    - 在组合函数返回时，记得添加上" ...toRefs(data)"以保持响应式，对对象解构或展开后会失去响应性，所以需要把reactive类型转换未ref类型

    ```
    <template> 
        <h2>{{ title }}</h2> 
        <h2>{{ rtitle }}</h2> 
        <button @click="hanldeClick">点他</button> 
    </template>
    <script setup>
        import {ref,reactive,toRefs} from 'vue'
        const title = ref('这是主标题')
        const data= reactive({
            rtitle:'这是副标题'
        })
        let { ritle } = { ...toRefs(data) }
        const hanldeClick = () =>{
            title.value = ' =>这是修改后的标题'
            data.rtitle = '=>这是修改后的副标题'
        }
    </script>
     ```
 ## 4. computed、watch 和 watchEffect
 - computed：计算属性
     ```
     <template> 
         <div>{{ addSum }}</div> 
     </template> 
     <script setup> 
         import { computed, ref, watch } from "vue"; 
         const a = ref(1) 
         const b = ref(2) 
         let addSum = computed(() => { 
             return a.value + b.value 
         })
         //-----另外一种写法
         let state = reactive({
             addSum:computed(()=>{
                 return a.value + b.value 
             })
         })
         watch(a, (newValue, oldValue) => { 
             console.log(`a从${oldValue}变成了${newValue}`) 
         }) 
     </script>
     ```
 - watch：监听
 
     `watch`是惰性执行的，而`watchEffect`不是，不考虑`watch`第三个配置参数的情况下，`watch`在组件第一次执行的时候是不会执行的，只有在之后依赖项变化的时候再执行，而`watchEffect`是在程序执行到此处的时候就会立即执行，而后再响应其依赖变化执行。

     `watch`需要传递监听的对象，`watchEffect`不需要

 
     - 可以接收三个参数，第一个是要监听的对象，第二个是数据处理变化，第三个是配置项(options)
     - options：immediate：true是刚进去就监听一次
     ```
     <script setup> 
         import {reactive, ref, toRefs, computed, watch} from "vue";
         //1.监听ref定义的数据
             const num = ref(0)
             const msg = ref('监听数据')
             watch(num,(nVal,oVal) =>{
                 console.log(nVal)
             },{immediate:true})
        //2.监听多个ref声明
            watch([num,msg],(nVal,oVal) =>{
                console.log(nVal)
            },{immediate:true})
        //3.监听reactive定义的响应式的全部数据
            注意：使用ractive定义的数据，无法正确获取oVal，并且强制开启了深度检测（deep配置无效）
            const state = reactive({
                name:'张三',
                age:18
            })
            watch(state，(nVal,oVal) =>{
                console.log(nVal)
            },{deep:true} //此配置无效)
        //4.监听reactive所定义的一个响应式数据的一个属性
            watch(state.name，(nVal,oVal) =>{
                console.log(nVal)
            })
        // 5：监听reactive所定义的一个响应式数据的一些属性 
            watch( 
                [() => state.age, () => state.name], 
                (nVal, oVal) => { 
                    console.log(nVal) 
            })
        // 6：当监听的声明对象内的属性还是一个对象，因为不是使用reactive直接声明的
            const person = {
                username:{
                    naems:'张三'
                }
            }
            watch(()=>person.username,(nVal,oVal) =>{
                console.log(nVal)
            },{deep:true} //此处由于监听的是reactie定义的对象内的某个属性，所以deep配置有效)
     </script>    
     ```
- watchEffect：它会立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数
    - computed注重的计算出来的值（回调函数的返回值），所以必须要写返回值
    - watchEffect更注重的是过程（回调函数的函数体），所以不用写返回值
    ```
    <template> 
        <div>{{ watchTarget }}</div> 
    </template> 
    <script setup> 
        import { watchEffect,ref } from "vue"; 
        const watchTarget = ref(0) 
        watchEffect(()=>{ 
            console.log(watchTarget.value) 
        }) 
        setInterval(()=>{ 
            watchTarget.value++ 
        },1000) 
    </script>
    ```
    首先刚进入页面就会执行watchEffect中的函数，打印出0，随着定时器的运行，watchEffect监听到的依赖数据的百花回调函数每隔一秒就会执行一次。

    **总结：**
    
   computed和watch所依赖的数据必须是响应式的。Vue3引入了watchEffect,watchEffect 相当于将 watch 的依赖源和回调函数合并，当任何你有用到的响应式依赖更新时，该回调函数便会重新执行。不同于 watch的是watchEffect的回调函数会被立即执行，即（{ immediate: true }）
   
## 5. 生命周期
    
```
    setup() : 开始创建组件之前，在beforeCreate和created之前执行。创建的是data和method
    onBeforeMount() : 组件挂载到节点上之前执行的函数。
    onMounted() : 组件挂载完成后执行的函数。
    onBeforeUpdate(): 组件更新之前执行的函数。
    onUpdated(): 组件更新完成之后执行的函数。
    onBeforeUnmount(): 组件卸载之前执行的函数。
    onUnmounted(): 组件卸载完成后执行的函数
    onActivated(): 被包含在中的组件，会多出两个生命周期钩子函数。被激活时执行。
    onDeactivated(): 比如从 A 组件，切换到 B 组件，A 组件消失时执行。
    onErrorCaptured(): 当捕获一个来自子孙组件的异常时激活钩子函数。
    onRenderTracked(): 直译过来就是状态跟踪，它会跟踪页面上所有响应式变量和方法的状态，也就是我们用return返回去的值，他都会跟踪。只要页面有update的情况，他就会跟踪，然后生成一个event对象，我们通过event对象来查找程序的问题所在。
    onRenderTriggered(): 直译是状态触发，它不会跟踪每一个值，而是给你变化值的信息，并且新值和旧值都会给你明确的展示出来。
```
## 6. 指令模板
-   组件上 v-model 用法已更改，支持双向绑定多个属性，例如v-model.title="title"
-   key 属性：

     - Vue 3.x 不建议在 v-if/v-else/v-else-if 的分支中使用 key，如果非要使用，请设置唯一的key值。
     -  Vue 3.x 可以将 key值 设置在template 上 (Vue2.x 需要将key值设置到子节点上)

-   v-if 与 v-for 的优先级对比

    - 2.x 版本中在一个元素上同时使用 v-if 和 v-for 时，v-for 会优先作用。Vue2.x v-for 优先级高
    - 3.x 版本中 v-if 总是优先于 v-for 生效。Vue3.x v-if 优先级高

-   v-bind 合并行为

    - 在 2.x，如果一个元素同时定义了 v-bind=“object” 和一个相同的单独的 property，那么这个单独的 property 总是会覆盖 object 中的绑定。 单独的属性覆盖v-bind
    - 在 3.x，如果一个元素同时定义了 v-bind=“object” 和一个相同的单独的 property，那么声明绑定的顺序决定了它们如何合并。
    ```
        <!-- vue 2.x --> 
        <!-- template --> 
            <div id="red" v-bind="{ id: 'blue' }"></div> 
        <!-- result --> 
            <div id="red"></div> 
        <!-- vue 3.x --> 
        <!-- template --> 
            <div id="red" v-bind="{ id: 'blue' }"></div> 
        <!-- result --> 
            <div id="blue"></div> 
        <!-- template --> 
            <div v-bind="{ id: 'blue' }" id="red" ></div> 
        <!-- result --> 
            <div id="red"></div>
    ```
- v-for 中的 Ref 数组

    - 在 Vue 2 中，在 v-for 里使用的 ref attribute 会用 ref 数组填充相应的 $refs property。当存在嵌套的 v-for 时，这种行为会变得不明确且效率低下。
    - 在 Vue 3 中，这样的用法将不再在 $ref 中自动创建数组。要从单个绑定获取多个 ref，请将 ref 绑定到一个更灵活的函数上 (这是一个新特性)
    ```
        <div v-for="item in list" :key="item" :ref="setItemRef"></div> 
        <script setup>
            let itemRefs = [] 
            const setItemRef = el => { 
                if (el) { 
                    itemRefs.push(el) 
                } 
            }
            // itemRefs 不必是数组：它也可以是一个对象，其 ref 会通过迭代的 key 被设置。 
            // 如果需要，itemRef 也可以是响应式的且可以被监听。
        <scripy>
    ```
## 7. 组件通信：props、emit、ref
```
// 父组件------------------------------
<template>
    <h2>{{title}}</h2>
    <child :toChildTitle="toChildTitle" @handleChange="handleChange" ref="childRef"></child>
</template>
<script setup>
    import {onMounted, reactive, toRefs, ref} from "vue"
    //需要先定义ref
        const childRef = ref()
        const state = reactive({
            title:'原来的值',
            toChildTitle:'传递的值'
        })
        onMounted(()=>{
            //父组件获取/修改子组件数据
            console.log(childRef.value.val)
            //父组件触发子组件方法
            chindRef.value.childFun()
        })
        const handelChange = (val) =>{
            state.title = handelChange
        }
</script>

// 子组件------------------------------
<template>
    <h2>{{ toChildTitle }}</h2> 
    <div @click="changeBtn">点它</div>
</template>
<script setup>
    import {reactive, ref, toRefs, watch} from "vue"
    const emit = defineEmits({"handleChange"});
    const props = defineProps({
        toChildTitle: String,
    })
    // 触发父组件的方法 
    const changeBtn = () => { 
        emit('handleChange', '从child修改后的title') 
    }
</script>
```