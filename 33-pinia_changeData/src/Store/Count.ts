import { defineStore } from "pinia";

export const useCountStore = defineStore('count',{
    actions:{ 
        increment(value:any){ //增量函数
            if( this.sum < 10){     //限制
                this.sum += value
            }  
        }
    },
    // 真正存储数据的地方
    state(){
        return {
            sum: 6,
            school: 'JNU',
            city: 'Guangzhou'
        }
    }
}) 