'use strict';

module.exports = {
  metadata: () => ({
    name: 'Test2',
    properties: {
    },
    supportedActions: []
  }),
  invoke: (conversation, done) => {
    // perform conversation tasks.             
      var l = [{"EXPENSE_REPORT_ID":5,"PREPARER_ID":4445566,"PERSON_ID":1120575,"EXPENSE_REPORT_DATE":"2019-04-18T00:00:00.000Z","EXPENSE_REPORT_TOTAL":1691,"PURPOSE":"quality control","EXPENSE_STATUS_CODE":"120","EXPENSE_STATUS_DATE":"2019-04-20T00:00:00.000Z","LAST_AUDIT_CODE":"120","AUDIT_RETURN_REASON_CODE":"Employee Review from Auditor","FINAL_APPROVAL_DATE":"2019-04-22T00:00:00.000Z","CASH_EXPENSE_PAID_DATE":null,"CREATION_DATE":"2019-04-16T00:00:00.000Z","CREATED_BY":"Achmed","LAST_UPDATED_BY":"4445566","LAST_UPDATED_DATE":"2019-05-01T14:00:55.224Z"}
      ,{"EXPENSE_REPORT_ID":6,"PREPARER_ID":"Joods","PERSON_ID":1120575,"EXPENSE_REPORT_DATE":"2019-04-18T00:00:00.000Z","EXPENSE_REPORT_TOTAL":516,"PURPOSE":"real estate","EXPENSE_STATUS_CODE":"310","EXPENSE_STATUS_DATE":"2019-04-20T00:00:00.000Z","LAST_AUDIT_CODE":"310","AUDIT_RETURN_REASON_CODE":"Audit required","FINAL_APPROVAL_DATE":"2019-04-22T00:00:00.000Z","CASH_EXPENSE_PAID_DATE":null,"CREATION_DATE":"2019-04-16T00:00:00.000Z","CREATED_BY":"1234567","LAST_UPDATED_BY":"1234567","LAST_UPDATED_DATE":"2019-05-01T14:00:55.258Z"}];
      for (let i = 0; i < l.length; i++) {
        var element = l[i].CREATED_BY;
        var element2 = l[i].PREPARER_ID;
        var string = element +  ' Element2 ' + element2;
        conversation.reply({});
    //     conversation.reply({ 
    //       component: "System.CommonResponse",
    //     properties:{
    //       nlpResultVariable: "iResult" ,
    //       processUserMessage: true,
    //       autoNumberPostbackActions:{
    //       metadata: {
    //         responseItems:{         
    //         type: "cards", 
    //           cardLayout: "horizontal",
    //           cards:{
    //           title: element,
    //             description: "Click 'See status' to see more information",
    //             name: "reportCard",
    //             iteratorVariable: i,
    //             actions: {
    //             label: "See status",
    //               type: "postback",
    //               payload: {
    //                 action: "status",
    //                 variables: {
    //                   expenses: element2
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    // );
      }
      done();
  }
};