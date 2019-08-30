Page({
  onTap:function(event){
    wx.navigateTo({
      url: "../posts/posts"
    })
    },

    // 平行跳转，没有返回按钮
    // wx.redirectTo({
    //   url: "../posts/posts"
    // });
})