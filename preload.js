const shell = require("electron").shell;
//打开外部链接

/*
const workUBrowser = window.utools.ubrowser.goto('https://carbon.now.sh/')

workUBrowser.run({
  show: false,
  width: 1000,
  height: 780,
  fullscreenable: false,
  alwaysOnTop: true,
  maximizable: false,
  resizable: false
})
*/

window.exports = {
   "excalidraw": { // 注意：键对应的是 plugin.json 中的 features.code
      mode: "none",  // 用于无需 UI 显示，执行一些简单的代码
      args: {
         // 进入插件时调用
         enter: (action) => {
            // action = { code, type, payload }
            window.utools.hideMainWindow()
            // do some thing
            window.utools.outPlugin()
            
            window.utools.ubrowser.goto('https://excalidraw-vercel.vercel.app/')
            .show()
            .run({
				show: true,
				width: 1000,
				height: 780,
				alwaysOnTop: false,
				maximizable: true,
				// 窗口是否可以改变尺寸
				resizable: true,
				// 窗口在屏幕居中
				center: true,
				// 窗口是否可以进入全屏状态
				fullscreenable: true
			})
         }  
      } 
   }
}
