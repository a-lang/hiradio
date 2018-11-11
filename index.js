'use strict'
const app = require('electron').app
const ipc = require('electron').ipcMain
const shell = require('electron').shell
const createMainMenu = require('./menu')
const createMainWindow = require('./window')

require('electron-debug')()

let mainWindow

function handleClosed() {
    mainWindow = null
}


app.on('window-all-closed', () => {
    if (process.platform === 'darwin') {
        app.hide()
    } else {
        app.quit()
    }
})

app.on('activate', () => {
    if (!mainWindow) {
        createMainWindow(handleClosed)
    }
})

app.on('ready', () => {
    createMainWindow(handleClosed)
    createMainMenu()
})


ipc.on('clicklink', (event, url) => {
    event.preventDefault()
    shell.openExternal(url)
})