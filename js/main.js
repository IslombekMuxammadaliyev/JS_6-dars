/*localStorage - shaxsiy,mahaliy ombor*/

/*localStorage.setItem('ism','Navruz');
localStorage.setItem('familiya','Malikov');
localStorage.setItem('yoshi','17yoshda');

localStorage['ism'] = 'Islom';
localStorage['familiya'] = 'Muhammadaliyev';

localStorage.removeItem('ism');
localStorage.removeItem('familiya');
localStorage.removeItem('yoshi');


let uningIsmi = localStorage.getItem('ism');
let uningfamiliyasi = localStorage.getItem('familiya');
let uningYoshi = localStorage.getItem('yoshi');

console.log(uningIsmi,uningfamiliyasi,uningYoshi);*/

/*https request in JS (JS da https so'rovlar)*/

/*let sorov    = new XMLHttpRequest();

sorov.open('get','https://getty.uz/serverdan/malumot/olish');

sorov.send();
sorov.onload = function (){
    console.log(sorov.responseText);
}*/

/*JSON in JS (JS da ma'lumotlarni JSONlash)*/

/*let jsFile = {ism:"Navruz",yoshi:18}    /!*JavaScript*!/
let jsonFile = '{"ism":"Navruz","yoshi":18}';  /!*JSON*!/*/
/*console.log(JSON.stringify(jsFile));*/  /*JS ni JSONga o'girish*/
/*console.log(JSON.parse(jsonFile));     /!*JSON ni JSga o'girish*!/*/

let sorov = new XMLHttpRequest();
sorov.open('get','jsonFayl.json');
sorov.send();
sorov.onload = function (){
    let byData = JSON.parse(sorov.responseText);
    console.log(byData.ism,byData.yoshi)
}
let jsonFile = new XMLHttpRequest();
jsonFile.open('get', 'jsonFayl.js')
jsonFile.send();
sorov.onload = function (){
    console.log(byData.ism,byData.yoshi)
}














