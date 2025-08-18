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
        loveList: [
        {id: 1, content: '我觉得你特别像一款游戏——我的世界'},
        {id: 2, content: '你有地图吗？我在你的眼睛里迷路了。'},
        {id: 3, content: '我在找一匹马。什么马？你的微信号码。'}
        ]
      }
    }
}) 