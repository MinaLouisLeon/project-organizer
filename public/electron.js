const {default: installExtension,REDUX_DEVTOOLS} = require("electron-devtools-installer");
const {app,BrowserWindow,ipcMain, protocol} = require('electron');
const url = require('url');
const path = require('path');

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        webPreferences : {
            preload : `${__dirname}/preload.js`
        }
    })
    const appUrl = app.isPackaged
        ? url.format({
            pathname : "index.html",
            protocol : "file",
            slashes : true
        })
        : "http://localhost:3000";

    if(!app.isPackaged){
        installExtension(REDUX_DEVTOOLS)
        .then((name) => {
            console.log("done add ReduxDevtool")
        })
        .catch((err) => {
            console.error("failed add ReduxDevtool")
        })
        mainWindow.webContents.openDevTools();
    }
    mainWindow.removeMenu();
    mainWindow.loadURL(appUrl);
}

app.on('ready',() => {
    protocol.interceptFileProtocol("file",(request,callback) => {
        const url = request.url.substr(7); /* all urls start with 'file://' */
        callback({path : path.normalize(`${__dirname}/${url}`)});
    },(err) => {
        if(err) console.error("failed to register protocol");
    });
    createMainWindow();
});

app.whenReady().then(() => {
    app.on("activate",() => {
        if(BrowserWindow.getAllWindows().length === 0) createMainWindow()
    })
})

app.on("window-all-closed",() => {
    if(process.platform !== "darwin") app.quit();
})