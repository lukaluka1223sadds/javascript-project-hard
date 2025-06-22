'use strict'

import { log } from "../../log/js.js"

export default function AddLog2(response , state){
    const valuta =  response.match(/[$£¥€]/g)
    const setObj={
        name : "JPMorgan Chase & Co",
        success : response !== Object ? true : false,
        stateBefore : state,
        stateAfter : response,
        valuta : valuta[0],
        error : response !== Object ? null : {testo:response.message}
    }
    log.push(setObj)
    console.log(log)
}