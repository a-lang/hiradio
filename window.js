'use strict'
const join = require('path').join
const BrowserWindow = require('electron').BrowserWindow

module.exports = function createMainWindow(handleClosed) {
    var url = "https://hichannel.hinet.net/radio/index.do"

    const window = new BrowserWindow({
        minWidth: 615,
        width: 1024,
        height: 768,
        icon: join(__dirname, 'build/icon.png'),
        title: 'HiNet Internet Radio',
        titleBarStyle: 'hiddeninset',
        webPreferences: {
            nodeIntegration: false
        }
    })

    window.loadURL(url)
    window.on('closed', handleClosed)

    return window
}