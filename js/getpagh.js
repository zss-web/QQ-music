const axios=require('axios');

var name=[],pic=[],mp3url=[];
async function getpage(num){
    let httpUrl="https://www.app-echo.com/api/recommend/sound-day?page="+num
    let res=  await  axios.get(httpUrl);
    // console.log(res.data.list.length)
    res.data.list.forEach(function(val,i){
        // console.log(val.sound.name)
        name[i]=val.sound.name;
        pic[i]=val.sound.pic_200;
        mp3url[i]=val.sound.source;

    })
console.log(name)

}