'use strict';

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var axios = require('axios');
// var request = require('request');

module.exports = {
  metadata: () => ({
    name: 'testEndpoint30',
    supportedActions: []
  }),
  invoke: (conversation, done) => {
    // perform conversation tasks.
    var url = "https://skapi9-acnoraclesg01.gbcom-south-1.oraclecloud.com/api/v2/skynet";
    // axios.get(url, 
    //   {
    //     headers:
    //     {
    //       "accept": 'application/json'
    //     }
    //   }).then(result=>{
    //   conversation.reply(result);
    //   done();
    // });
    // request
    //   .get(url)
    //   .on('error', function(err){
    //     conversation.reply('There has been an error. Please try again later.');
    //     done();
    //   })
    //   .on('response', function(response)
    //   {
    //     conversation.reply(response);
    //     done();
    //   });



    /**
     * 
     * deze request geeft 2x de database results terug. en tussen de twee de gehele bot procedure
     * 
     */
  //   request(url,function(error,response,body){
  //     // console.log('res :',response);
  //     var json = JSON.parse(body);
  //     var parse = json.results[0].PERSON_ID;
  //     conversation.reply(parse);
  //     done();
  // });
  function xhrOnLoad(){
      // var testArray = [{"CREATED_BY": 1,"LAST_UPDATED_BY": null,"LAST_AUDIT_CODE": null,"EXPENSE_REPORT_ID": 1,"EXPENSE_REPORT_DATE": null,"CASH_EXPENSE_PAID_DATE": null,"CREATION_DATE": null,"PREPARER_ID": 1120575,"LAST_UPDATED_DATE": null,"EXPENSE_REPORT_TOTAL": null,"PERSON_ID": 1122507,"FINAL_APPROVAL_DATE": null,"PURPOSE": null,"EXPENSE_STATUS_CODE": null,"EXPENSE_STATUS_DATE": null,"AUDIT_RETURN_REASON_CODE": null}];
      // var data = JSON.parse(this.responseText);
      // var data = '{"status": "OK","message": "Succesfull retrieve." "results": [   {        "EXPENSE_REPORT_ID": 1,          "PREPARER_ID": 1120575,          "PERSON_ID": 1122507,          "EXPENSE_REPORT_DATE": null,          "EXPENSE_REPORT_TOTAL": null,          "PURPOSE": null,          "EXPENSE_STATUS_CODE": null,          "EXPENSE_STATUS_DATE": null,          "LAST_AUDIT_CODE": null,          "AUDIT_RETURN_REASON_CODE": null,          "FINAL_APPROVAL_DATE": null,          "CASH_EXPENSE_PAID_DATE": null,          "CREATION_DATE": null,          "CREATED_BY": null,          "LAST_UPDATED_BY": null,          "LAST_UPDATED_DATE": null      }  ]}';
      // var testObj = data.results;
      // if(testObj == null){
        // console.log('empty');
        // conversation.reply("lik mn tepel");
        // done();
      // }else{
        // console.log("yeet");
        // conversation.reply("doner?");
        // var test = JSON.stringify(testArray[0].CREATED_BY);
        var data = this.response; 
        var test = data.results[0].CREATED_BY;
        var jTest = JSON.stringify(test);
        conversation.reply(jTest);
        done();
        
        // for (let i = 0; i < data.length; i++) {
        //   const element = JSON.stringify(data[i]
        //   conversation.reply(element);
        //   done();
        // }




        // var test = JSON.stringify(testArray[0]);
        // conversation.reply(test);
        // done();
      }
    // }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    // xhr.setRequestHeader('content-type', 'application/json');
    xhr.addEventListener('load', xhrOnLoad);
    // xhr.onload = function(){
    //     var data = JSON.parse(this.response);
    //     if(data == null){
    //         console.log('empty');
    //         conversation.reply(toString(data));
    //       }else{
    //           console.log("yeet");
    //           conversation.reply(toString(data));
    //         }
    //         done();
    //       }
    xhr.send();
            
          }
        };
        // function call() {
          //   var url = "https://skapi9-acnoraclesg01.gbcom-south-1.oraclecloud.com/api/v2/skynet";
          //   var xhr = new XMLHttpRequest();
          //   xhr.open('GET', url, true);
          //   xhr.setRequestHeader('content-type', 'application/json');
          //   xhr.onload = function () {
            //     var data = JSON.parse(this.response);
            //     console.log(data);
            //     return data;
            //   }
            //   xhr.onerror = function (e) {
              //     console.log(e);
              //     alert(e);
              //   }
              //   xhr.send();
              // };