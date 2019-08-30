var postsData = require('../data/posts-data.js')
Page({

  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function (options) {

    // this.data.postList = postsData.postList
    this.setData({
      posts_key: postsData.postList
    });
  }
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
})