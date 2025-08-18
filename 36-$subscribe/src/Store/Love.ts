import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";

export const useLoveStore = defineStore('Love',{
    actions:{
    async getTalk(){
        //发请求
   let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//    //将请求回来的字符串封装成对象
   let obj = {id:nanoid(), content:result.data.content}
//    //放到数组中
   this.loveList.unshift(obj)
    }, catch(error:any){
        console.log('获取情话失败',error)
    }
    },
    // 真正存储数据的地方
    state(){
        return { 
        //持久化：查看loveList，将之前转为JSON的字符串翻译回正常列表
        loveList:JSON.parse(localStorage.getItem('loveList')as string) || [] //若无，则返回空数组
      }
    }
}) 