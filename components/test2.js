'use strict';

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var axios = require('axios');
// var request = require('request');

module.exports = {
  metadata: () => ({
    name: 'testEndpoint28',
    properties: {},
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
      var data = JSON.parse(this.response);
      // var data = '{"status": "OK","message": "Succesfull retrieve." "results": [   {        "EXPENSE_REPORT_ID": 1,          "PREPARER_ID": 1120575,          "PERSON_ID": 1122507,          "EXPENSE_REPORT_DATE": null,          "EXPENSE_REPORT_TOTAL": null,          "PURPOSE": null,          "EXPENSE_STATUS_CODE": null,          "EXPENSE_STATUS_DATE": null,          "LAST_AUDIT_CODE": null,          "AUDIT_RETURN_REASON_CODE": null,          "FINAL_APPROVAL_DATE": null,          "CASH_EXPENSE_PAID_DATE": null,          "CREATION_DATE": null,          "CREATED_BY": null,          "LAST_UPDATED_BY": null,          "LAST_UPDATED_DATE": null      }  ]}';
      if(data == null){
        console.log('empty');
        conversation.reply(toString(data));
      }else{
        console.log("yeet");
        conversation.reply(toString(data));
      }
      done();
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    // xhr.setRequestHeader('content-type', 'application/json');
    xhr.addEventListener('response', xhrOnLoad);
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
          xhr.onerror = function (e) {
              alert(e);
            }
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