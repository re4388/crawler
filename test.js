let arr = [{
    name:
        'In Ecuador, Political Actors Must Step Away From Ola Bini’s Case',
    link:
        'https://www.eff.org/deeplinks/2019/08/ecuador-political-actors-must-step-away-ola-binis-case'
},
{
    name:
        'Air Force Reveals Tests of Supposed Record-Setting Scramjet from N. Grumman',
    link:
        'https://www.thedrive.com/the-war-zone/29307/air-force-reveals-tests-of-supposed-record-setting-scramjet-engine-from-northrop-grumman'
},
{
    name: 'Metaprogramming for madmen (2012)',
    link:
        'https://fgiesen.wordpress.com/2012/04/08/metaprogramming-for-madmen/'
}]

// find the elt only content certain keyword

// var str = "Hello world, welcome to the universe.";
// var n = str.includes("world");
// n




// resultArr



// console.log(removeDuplicate);


function searchByKeyword(arr, keyword1, keyword2, keyword3 ) {
    let resultArr = []
    let searchArr_1 = arr.find(item => item.name.includes(keyword1))
    let searchArr_2 = arr.find(item => item.name.includes(keyword2))
    let searchArr_3 = arr.find(item => item.name.includes(keyword3))
    resultArr.push(searchArr_1, searchArr_2, searchArr_3)
    let removeDuplicateArr = [...new Set(resultArr)]
    return removeDuplicateArr
}

// 如何自動伸縮輸入的參數
// 不過這樣上面的函數的裡面也要變成動態的loop or forEach之類的
let result = searchByKeyword(arr, 'Ecuador', 'Reveals','Force' )
result