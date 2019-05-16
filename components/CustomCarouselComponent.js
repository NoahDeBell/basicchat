'use strict';

var axios = require('axios');

module.exports = {
  metadata: () => ({
    name: 'CustomCarouselComponent',
    properties: {
      "selectedReport" :
      {
        "type": "string"
      },
      "userId" :
      {
        "type": "string",
        "required": true
      }
    },
    supportedActions: []
  }),
  invoke: (conversation, done) => {
    //definement variables that retrieve properties from the component
    const { selectedReport }  = conversation.properties();
    const { userId }  = conversation.properties();

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
        if(data.status == "OK"){
          var cards = [];
          //array variable filled with results from the http request
          var array = data.results;
            for (let i = 0; i < array.length; i++) {
              //define the element we currently on
              const element = array[i];
              
              //title of the current report
              var titleReport  = JSON.stringify(element.EXPENSE_REPORT_ID);
              //description of the current report
              var description = element.PURPOSE;
              //date of current report
              var date = element.EXPENSE_REPORT_DATE;
              var sliced = date.slice(0,10);//here we parse the date so we can only see YYYY/MM/DD
              //status message of current report as to where it is in the process of reimbursement
              var statusMessage = element.STATUS;
              //string we return in a card object to the user
              var descriptString = description +" Datum: " + sliced;
              //button with some text and actions/variables defined within
              let button = 
              conversation.MessageModel().postbackActionObject("See details ",null,
                  {
                    selectedReport : titleReport,
                    stateToken : secretToken
                  }
                );

              //building the card object as a whole
              let cardObj = conversation.MessageModel().cardObject("id: " + titleReport + " status: " + statusMessage,descriptString,null,null,[button]);
              //push a singular card object to the cards array
              cards.push(cardObj);
            }
        /**
         * here we build a message with horizontal alignment
         * it will reply a generic message and a sideways scrollable list of cards
         */
        var cardResponseMessage = conversation.MessageModel().cardConversationMessage('horizontal',cards);
        conversation.reply(`These ${array.length} reports belong to you. Click the details button to see details`);
        conversation.reply(cardResponseMessage);

        done();
        }else{
          //on error from the requested call, we would like to sent a message that something went wrong
          conversation.reply("Something went wrong, or you dont have any expenses filled in.");
        }
      })
      .catch(function(err)
        {
          //handle error
          console.log(err);
        }
      );
    }
    
      function getReports() {
        return axios.get(`https://skapi9-acnoraclesg01.gbcom-south-1.oraclecloud.com/api/v2/reports/${ userId }`).then((res) => {
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