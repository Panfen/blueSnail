export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/report/index',
    'pages/explore/index',
    'pages/home/index',
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '明细',
        iconPath: 'imgs/index.png',
        selectedIconPath: 'imgs/index_.png',
      },
      {
        pagePath: 'pages/report/index',
        text: '统计',
        iconPath: 'imgs/report.png',
        selectedIconPath: 'imgs/report_.png',
      },
      {
        pagePath: 'pages/explore/index',
        text: '发现',
        iconPath: 'imgs/explore.png',
        selectedIconPath: 'imgs/explore_.png',
      },
      {
        pagePath: 'pages/home/index',
        text: '我的',
        iconPath: 'imgs/home.png',
        selectedIconPath: 'imgs/home_.png',
      }
    ],
    'color': '#000',
    'selectedColor': '#1296db',
    'backgroundColor': '#fff',
    'borderStyle': 'black'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
