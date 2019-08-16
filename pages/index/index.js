import request from "../../utils/request.js";

Page({
 data:{
   autoplay:true,
  //  轮播图的数据
  imgUrls:[

  ]
 },
 onLoad(){
   request({
     url:"/home/swiperdata"
   }).then(res=>{
    //  返回的数组
    const{message}=res.data;
    // 修改imgUrls
    this.setData({
      imgUrls:message
    })
   })
 }
})
