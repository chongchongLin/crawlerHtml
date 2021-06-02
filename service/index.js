const http = require('http');
let cheerio = require('cheerio');
const fs = require('fs');
const pageUrl = '';
http.get(pageUrl,(res)=>{
    let html = '';
    res.on('data',(data)=>{
        html+=data
    })
    res.on('end',()=>{
        callback(html)
    })
})

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