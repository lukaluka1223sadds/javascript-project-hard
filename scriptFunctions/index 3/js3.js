'use strict'

export default async function js3(props){
    let number = props.match(/\d+/)
    const valuta = props.match(/[$£¥€]/g)
    switch (valuta[0]){
        case "£" :
            number = number * 3;
            break;
        case "¥" :
            number = number * 2;
            break;
        case "€" :
            number = number * 4
            break;
        default :
            number
    }
    const final = number - 12
    return new Promise((resolve,reject)=>{ setTimeout(()=>{resolve(`${final} $`)},2000)})
}