'use strict'

import {log} from "../../log/js.js" 

export default function AddLog(response,state){
    const valuta = typeof response === "string" ? response.match(/[$£¥€]/g) : null; 
    const logs={
        name:"Italy bank",
        success: typeof response == "string" ? true : false,
        stateBefore:state,
        stateAfter:typeof response == "string" ? response : "Error",
        valuta: valuta && valuta[0] ? valuta[0] : "Error",
        error: typeof response == "string" ? null : {
            testo:response.message
        }
    }
    console.log(logs)
    log.push(logs)
}