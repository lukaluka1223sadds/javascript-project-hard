'use strict'

import {log} from "../../log/js.js" 

export default function AddLog1(response,state){
    const valuta =  response.match(/[$£¥€]/g)
    const logs={
        name:"みずほフィナンシャルグループ",
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