import { defineStore } from "pinia";

export const useLoveStore = defineStore('Love',{
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