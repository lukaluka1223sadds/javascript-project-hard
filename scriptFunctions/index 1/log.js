'use strict'

import {log} from "../../log/js.js" 

export default function AddLog(response,state){
    const valuta =  response.match(/[$£¥€]/g)
    const logs={
        name:"Italy bank",
        success: response !== Object?true: false,
        stateBefore:state,
        stateAfter:response,
        valuta:valuta[0],
        error: response !== Object ? null : {
            testo:response.message
        }
    }
    log.push(logs)
}