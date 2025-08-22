// 引入mitt
import mitt from "mitt";
// 调用mitt
const emitter = mitt()
// 暴露mitt
export default emitter

// 绑定事件
emitter.on('test1',()=>{
    console.log('test1被调用了')
})
emitter.on('test2',()=>{
    console.log('test2被调用了')
})

//定时(循环)触发事件
setInterval(()=>{
    emitter.emit('test1')
    emitter.emit('test2')
}, 1000)
//定时解绑事件
setTimeout(()=>{
    // emitter.off('test1') 单一解绑
    emitter.all.clear()  //全部解绑
}, 3000)