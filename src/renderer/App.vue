<template>
  <div id="app" style="width: 100%;height:100%">
     <webview id="schoolManagement" nodeintegration src="http://dev-college.iol8.net/#/login/WIDS" style="width: 100%;height:100%"></webview>
    <!-- <iframe name="my-iframe" id="my-iframe" src="http://edu.transn.com/#/login/ALSD" frameborder="0" width="100%" height="100%" scrolling="0"></iframe> -->
      <!-- <input v-model='url'>
      <button @click="runExec">打开exe</button><br><br> -->
      <!-- <div style="width: 100%;height:100%;backgrand:red">
        aaa
      </div> -->
  </div>
</template>

<script>
import { app, BrowserWindow } from 'electron'
  export default {
    name: 'demo',
    data() {
    return {
      url: ""
    };
  },
  mounted(){
    console.log(111)
    const fs = require('fs')
    const path = require('path')
    console.log(fs,path,process.cwd())
    const oldUrl =path.join(process.cwd(),'/resources/extraResources')
    const newUrl = path.join(process.cwd(),'/extraResources')
    console.log(oldUrl,newUrl)
    const { ipcRenderer } = window.require('electron');
    ipcRenderer.on('ping', (event, message) => {
      console.log(message) // Prints 'whoooooooh!'，这里的message是object类型
      console.log(__dirname)
    })

    let webview = document.getElementById('schoolManagement');

    webview.addEventListener('ipc-message', (event) => { //ipc-message监听，被webview加载页面传来的信息
      console.log(event.channel)//最终收到消息输出   子页面信息
      switch(event.channel.id){
          case 'tool1' :
            console.log('拆分工具')
            // this.runExec(newUrl)
            console.log(newUrl+'/CadProcess/CadProcess.exe',oldUrl+'/CadProcess/CadProcess.exe')
            this.openExe(newUrl+'/CadProcess/CadProcess.exe',oldUrl+'/CadProcess/CadProcess.exe')
            break; 
          case 'tool2' :
            console.log('抄袭检测')
            this.openExe(newUrl+'/CopyCheck/CopyCheck.exe',oldUrl+'/CopyCheck/CopyCheck.exe')
            break;
          case 'tool3' :
            //语句
            console.log('辅助写作')
            this.openExe(newUrl+'/辅助阅读工具/ReadCat.exe',oldUrl+'/辅助阅读工具/ReadCat.exe')
            break; //可选
          case 'tool4' :
            console.log('消密还原')
            this.openExe(newUrl+'/FileEncrypt/FileEncrypt.exe',oldUrl+'/FileEncrypt/FileEncrypt.exe')
            break; 
          case 'tool5' :
            //语句
            console.log('字数统计')
            this.openExe(newUrl+'/WordStatistics/WordStatistics.exe',oldUrl+'/WordStatistics/WordStatistics.exe')
            break; //可选
          case 'tool6' :
            console.log('术语提取')
            this.openExe(newUrl+'/提取术语/ExtractKeyWord.exe',oldUrl+'/提取术语/ExtractKeyWord.exe')
            break; 
          case 'tool7' :
            console.log('语料对齐')
            this.openExe(newUrl+'/语料对齐工具/CorpusAlignment.exe',oldUrl+'/语料对齐工具/CorpusAlignment.exe')
            break; 
          case 'tool8' :
            console.log('语到')
            this.openExe(newUrl+'/YuDao/YuDao.exe',oldUrl+'/YuDao/YuDao.exe')
            break; 
          case 'tool9' :
            console.log('CAD工具')
            this.openExe(newUrl+'/CadProcess/CadProcess.exe',oldUrl+'/CadProcess/CadProcess.exe')
            break; 
          default :
      }
    })
  },
  methods: {
    openExe(newUrl,oldUrl){
      const that = this
      const fs = require('fs')
       fs.stat(oldUrl, function (err) {
        if (err) {
          that.runExec(newUrl)
        } else {
          that.runExec(oldUrl)
        }
      })
    },
    runExec(url) {
      const exec = require("child_process").exec;
      exec(url, (error, stdout, stderr) => {
        console.log(JSON.stringify(error, stdout, stderr));
      });
    }
  }
  }
</script>

<style>
  /* CSS */
  html,body{
     height: 100%;
     width: 100%;
     margin: 0;
     padding: 0;
  }
</style>
