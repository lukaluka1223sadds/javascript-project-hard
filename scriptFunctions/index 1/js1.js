'use strict'
export default async function js1(prop1){
    let numb = prop1.match(/\d+/)
    const valuta =  prop1.match(/[$£¥€]/g)
    switch(valuta[0]){
        case "$" :
            numb = numb[0] * 3;
            break;
        case "£" :
            numb = numb[0] * 2;
            break;
        case "¥" : 
            numb = numb[0] * 6
            break;
        default:
            numb
    }
    const final = numb - 45
    return  new Promise((resolve , reject)=>{setTimeout(()=>{resolve(`${final} €`)},3000)}) 
}