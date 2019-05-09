'use strict';

var axios = require('axios');
// const { MessageModel } = require('@oracle/bots-node-sdk/lib');

module.exports = {
  metadata: () => ({
    name: 'TestingComponent',
    properties: {
    },
    supportedActions: []
  }),
  invoke: (conversation, done) => {
    //buildmessage model
    getReports().then((data) => {
      var cards = [];
      if(data.status == "OK"){
        var array = data.results;
          for (let i = 0; i < array.length; i++) {

            const element = array[0];

            let cardObj = conversation.MessageModel().cardObject(element.PURPOSE,element.PURPOSE,null,null,null);
            cards.push(cardObj);


            //build messageItem
            // messageItem.push(
            //   MessageModel.cardObject({
            //     title: toString(element.PREPARER_ID),
            //     description: element.PURPOSE
            //   })
            // );
            // messageItem.push({
            //   title : element.EXPENSE_REPORT_ID + ' ' + element.EXPENSE_STATUS_CODE,
            //   description : element.PURPOSE
            // });
          }
      }
      var cardResponseMessage = conversation.MessageModel().cardConversationMessage('horizontal',cards);
      conversation.reply(cardResponseMessage);
      done();
    });

      function getReports() {
        return axios.get("https://skapi9-acnoraclesg01.gbcom-south-1.oraclecloud.com/api/v2/skynet").then((res) => {
          return res.data;
        });
      }
  }
};

