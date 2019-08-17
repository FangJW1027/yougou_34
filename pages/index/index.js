import request from "../../utils/request.js";

Page({
 data:{
   autoplay:true,
  //  轮播图的数据
  imgUrls:[

  ],
  // 菜单数据
  menus:[],
  // 楼层数据
  floors:[]
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
  //  请求菜单的数据
  request({
    url:"/home/catitems"
  }).then(res=>{
    const{message}=res.data;

    this.setData({
      menus:message
    })
  })
  // 请求楼层数据
  request({
    url:"/home/floordata"
  }).then(res=>{
    const{message}=res.data;

    this.setData({
      floors:message
    })
  })
 }
})
