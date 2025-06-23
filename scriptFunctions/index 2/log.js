'use strict'

import {log} from "../../log/js.js" 

export default function AddLog1(response,state){
    const valuta = response == "string" ? response.match(/[$£¥€]/g) : response
    const logs={
        name:"みずほフィナンシャルグループ",
        success: typeof response == "string"?true: false,
        stateBefore:state,
        stateAfter: typeof response == "string" ? response : "Error",
        valuta: typeof valuta == "string"? valuta[0] : "Error",
        error: typeof response == "string" ? null : {
            testo:response.message
        }
    } 
    console.log(logs)
    log.push(logs)
   
}