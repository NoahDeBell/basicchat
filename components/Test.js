'use strict';
  var axios = require('axios');
module.exports = {
  metadata: () => ({
    name: 'TestingComponent',
    properties: {
    },
    supportedActions: []
  }),
  invoke: (conversation, done) => {
    // perform conversation tasks.
    getTest().then((data) => {
      if(data.status == "OK"){
      var array = data.results;
      // for (let i = 0; i < array.length; i++) {
        // const element = array[i];
        const messageItem ={
          title:'Test :D',
          description:'08/05/2019',
          size: 'compact',
          mediaType: 'jpeg'
        };

        conversation
          .reply({
            type: 'text',
            items: [messageItem]
          });
        }
        done();
      // }
      });

      function getTest() {
        return axios.get("https://skapi9-acnoraclesg01.gbcom-south-1.oraclecloud.com/api/v2/reports/1120575").then((res) => {
          return res.data;
        });
      }
  }
};

