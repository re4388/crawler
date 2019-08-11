const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');



// use  cheerio.load to get html content
// const $ = cheerio.load('<h2 class="title">Hello world</h2>')

//use text to modify
// $('h2.title').text('Hello there!')

// use addClass to add class
// $('h2').addClass('welcome')

// see result
// let check = $.html()
// console.log(check) => <html><head></head><body><h2 class="title welcome">Hello there!</h2></body></html>


const URL = "https://news.ycombinator.com/";



// get needed information
request(URL, function (err, res, body) {
    if (err) {
        console.log(err);
    }
    else {
        const arr = [];
        let $ = cheerio.load(body);  //loading of complete HTML body
        $('tbody > .athing').each(function (index) {
            let link = $(this).find('td.title > a').attr('href');
            let name = $(this).find('td.title > a').text()
            const obj = {
                name:name,
                link:link,
            }
            arr.push(obj)
        })
        // console.log(arr)
    }
});



// console.log($.html())


        // $('table.itemlist > div.col-12-12 > div._3O0U0u').each(function (index) {
        //     const link = $(this).find('div._1UoZlX>a').attr('href');
        //     const name = $(this).find('div._1-2Iqu>div.col-7-12>div._3wU53n').text();
        //     // console.log(link);   
        //     // console.log(name);   
        //     const obj = {
        //         link: link,
        //         name: name,
        //     }

            //要字串化stringify，否則用fs.writeFile寫不入txt檔案
            //就算用writeStream.write可以執行，txt檔案也是顯示 [object Object]
            // arr.push(JSON.stringify(obj));

            // arr.push(obj)
            // console.log(arr)
        // });

        // save into file
        // let arr1 = arr.toString();

        // {"link": 
        // "/realme-c2-diamond-black-16-gb/p/itmfgwbaahz6ph9j?pid=MOBFFMG3FGAFZYVE&srno=s_1_1&otracker=search&lid=LSTMOBFFMG3FGAFZYVEPQOEDM&fm=organic&iid=4f14dce5-914c-41ba-b9d7-309fa9a60786.MOBFFMG3FGAFZYVE.SEARCH&qH=eb4af0bf07c16429", 
        // "name": "Realme C2 (Diamond Black, 16 GB)"}



        // // 設定寫入檔案和檔名顯示
        // const writeStream = fs.createWriteStream('file2.txt');
        // const pathName = writeStream.path;

        // // let array = ['1', '2', '3', '4', '5', '6', '7'];

        // // write each value of the array on the file breaking line
        // arr.forEach(item => writeStream.write(`${item}\n\n\n`));

        // // the finish event is emitted when all data has been flushed from the stream
        // writeStream.on('finish', () => {
        //     console.log(`wrote all the array data to file ${pathName}`);
        // });

        // // handle the errors on the write process
        // writeStream.on('error', (err) => {
        //     console.error(`There is an error writing the file ${pathName} => ${err}`)
        // });

        // // close the stream
        // writeStream.end();






// https://www.geeksforgeeks.org/nodejs-web-crawling-using-cheerio/#comment-4568888199


// 主要就是去找可以獨力判斷

// Dve tool

// X PATH
// //*[@id="container"]/div/div[3]/div[2]/div[1]/div[2]/div[2]/div/div/div/a/div[3]/div[1]/div[1]

// JS PATH
// document.querySelector("#container > div > div.t-0M7P._2doH3V > div._3e7xtJ > div._1HmYoV.hCUpcT > div:nth-child(2) > div:nth-child(2) > div > div > div > a > div._1-2Iqu.row > div.col.col-7-12 > div._3wU53n")

// selector
// #container > div > div.t - 0M7P._2doH3V > div._3e7xtJ > div._1HmYoV.hCUpcT > div: nth - child(2) > div: nth - child(2) > div > div > div > a > div._1 - 2Iqu.row > div.col.col - 7 - 12 > div._3wU53n


//  outterHTML
{/* <div class="_3wU53n">Realme C2 (Diamond Black, 16 GB)</div> */}


