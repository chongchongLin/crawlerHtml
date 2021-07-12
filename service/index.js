const http = require('http');
const https = require('https')   

let cheerio = require('cheerio');
const fs = require('fs');
const pageUrl = '';

crawleHtml(pageUrl)

function crawleHtml(pageUrl){
    let way = pageUrl.includes('s') ? https :http;
    way.get(pageUrl,(res)=>{
        let html = '';
        res.on('data',(data)=>{
            html+=data
        })
        res.on('end',()=>{
            console.log('html',html)
            callback(html)
        })
    })
}

function callback(html){
    let $ = cheerio.load(html);
    let data = [];
    $('p').each((index,el)=>{
        let ctn = $(el).text();
        data.push(ctn)
    })
    data = data.join('')
    console.log(data)
    fs.writeFile('./demo.txt',data,err=>{
        if(err){
            console.error(err)
            return
        }
    })


}