/*
    定时器的延迟时间,最小值是1
        即便写的0,默认值也会变为1

    node中一共具有6个宏任务队列,2个微任务队列(.then,nextTick各一个)
*/

// const fs = require('fs');

// setTimeout(()=>{
//     console.log('1');
// },50)

// fs.readFile('./01.原型扩展(1).html',()=>{
//     console.log('2')

//     setTimeout(()=>{
//         console.log('3');
//     },0)

//     setImmediate(()=>{
//         console.log('4');
//     })
// })

// setImmediate(()=>{
//     console.log('5');
// })

// 避免主线程代码执行速度过快,小于1ms,导致定时器不能成功触发
// for (let index = 0; index < 100000; index++) {
    
// }

// .then开启的微任务已经是VIP了,而nextTick是SVIP

// Promise.resolve().then(()=>{
//     console.log(1)


//     Promise.resolve().then(()=>{
//         console.log(2)
//     })

//     process.nextTick(()=>{
//         console.log(3)
//     })

//     Promise.resolve().then(()=>{
//         console.log(4)
//     })
// })

// Promise.resolve().then(()=>{
//     console.log(5)
// })

process.nextTick(()=>{
    console.log(1)


    Promise.resolve().then(()=>{
        console.log(2)
    })

    process.nextTick(()=>{
        console.log(3)
    })

    Promise.resolve().then(()=>{
        console.log(4)
    })
})