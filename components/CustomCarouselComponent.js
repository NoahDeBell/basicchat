'use strict';

var axios = require('axios');

module.exports = {
  metadata: () => ({
    name: 'CustomCarouselComponent',
    properties: {
      "selectedReport" :
      {
        "type": "string",
        "required": true
      }
    },
    supportedActions: []
  }),
  invoke: (conversation, done) => {
    //definement variables that retrieve properties from the component
    const selectedReport = conversation.properties().selectedReport;

    /**
     * psst this is a secret. 
     * It will be a second check to see if the postback was build here
     */
    const secretToken = "__CustomComponentCards__";

    //if postback else create postback 
    if(conversation.postback() && conversation.postback().stateToken == secretToken)
    {
      let postbackLoad = conversation.postback();
      conversation.variable(selectedReport, postbackLoad.selectedReport);
      conversation.keepTurn(true);
      conversation.transition();
      done();
    }
    else
    {
      //buildmessage model
      getReports().then((data) => {
        var cards = [];
        if(data.status == "OK"){
          //array variable filled with results from the http request
          var array = data.results;
            for (let i = 0; i < array.length; i++) {

              const element = array[i];
              
              var title  = JSON.stringify(element.EXPENSE_REPORT_ID);
              var description = element.PURPOSE;
              var statusCode = element.EXPENSE_STATUS_CODE;
              let button = 
              conversation.MessageModel()
                .postbackActionObject(
                  "See details" + title + " " + statusCode,
                  null,
                  {
                    selectedReport : title,
                    stateToken : secretToken
                  }
                );

              let cardObj = conversation.MessageModel().cardObject(title,description,null,null,[button]);
              cards.push(cardObj);
            }
        }

        var cardResponseMessage = conversation.MessageModel().cardConversationMessage('horizontal',cards);
        conversation.reply("These 10 reports belong to you. Click the details button to see details");
        conversation.reply(cardResponseMessage);

        done();
      })
      .catch(function(err)
        {
          //handle error
          console.log(err);
        }
      );
    }
    
      function getReports() {
        return axios.get(`https://skapi9-acnoraclesg01.gbcom-south-1.oraclecloud.com/api/v2/reports/1120575`).then((res) => {
          return res.data;
        });
      }
  }
};

/**
 * 
 * todo
 * postback for state transfer
 * properties definement
 * state transition <- where we show the selected variables
 * component for displaying some list of expenses within a report
 * 
 */