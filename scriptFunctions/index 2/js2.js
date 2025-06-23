'use strict'

export default async function js2(props){
    let number = props.match(/\d+/)
    const valuta = props.match(/[$£¥€]/g)
    switch (valuta[0]){
        case "£" :
            number = number / 2;
            break;
        case "$" :
            number = number * 3;
            break;
        case "€" :
            number = number * 7;
            break;
        default :number
    }
    const final = number - 100
    return new Promise((resolve , reject)=>{setTimeout(()=>{resolve(`${final} ¥`)},2000)})
}