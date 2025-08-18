import { defineStore } from "pinia";

export const useCountStore = defineStore('count',{
    actions:{ 
        increment(value){ //增量函数
            if( this.sum < 10){     //限制
                this.sum += value
            }  
        }
    },
    // 真正存储数据的地方
    state(){
        return {
            sum: 1,
            school: 'JNU',
            city: 'Guangzhou'
        }
    },
    getters:{  //getters用于计算
        bigSum:state=>state.sum * 10, //箭头函数默认调用父级this：可能发生this丢失
        schoolLowerCase():string{
            return this.school.toLowerCase() 
        },
        cityUpcase:state =>state.city.toUpperCase()
    }
}) 