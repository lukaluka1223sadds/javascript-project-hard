"use strict";

import js1 from "../scriptFunctions/index 1/js1.js";
import js2 from "../scriptFunctions/index 2/js2.js";
import js3 from "../scriptFunctions/index 3/js3.js";
import AddLog from "../scriptFunctions/index 1/log.js";
import AddLog1 from "../scriptFunctions/index 2/log.js";
import AddLog2 from "../scriptFunctions/index 3/log.js";

const executeAll1 = [
  {
    name: "index 1",
    action: async (state) => {
      let response;
      try {
        response = await js1(state);
      } catch (e) {
        response = {
          error: true,
          message: e.message || "errore a trasferire nell Italy bank",
        };
      }
      AddLog(response, state);
      return response;
    },
  },
  {
    name: "index 2",
    action: async (state) => {
      let response;
      try {
        response = await js2(state);
      } catch (e) {
        response = {
          error: true,
          message: e.message || "Error みずほフィナンシャルグループへの送金エラー",
        };
      }
      AddLog1(response, state);
      return response;
    },
  },
  {
    name: "index 3",
    action: async (state) => {
      let response;
      try {
        response = await js3(state);
      } catch (e) {
        response = {
          error: true,
          message:
            e.message || "Error transition money in JPMorgan Chase & Co bank",
        };
      }
      AddLog2(response, state);
      return response;
    },
  },
];

async function executeAll(e) {
  let a = e;
  for (let i = 0; i < executeAll1.length; i++) {
    const response = await executeAll1[i].action(a);
    a=response
    console.log()
    if(typeof response !== "string"){
      break;
    }
  }
}

export { executeAll };