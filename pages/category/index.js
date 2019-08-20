import request from "../../utils/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navs: [
 
      "油烟机",
    ],
    current:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
      request({
        url:"/categories"
      }).then(res=>{
        const{message}=res.data;

        this.setData({
          navs:message
        })
      })
  },

  // 菜单栏点击时候触发
  handleChange(event){
    const {index}=event.currentTarget.dataset

    this.setData({
      current:index
    })
  }
   
})