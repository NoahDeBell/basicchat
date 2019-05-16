'use strict';

var axios = require('axios');

module.exports = {
    metadata: ()=> (
        {
            name: 'CustomListComponent',
            properties: {
                "selectedReport":{
                    "type" : "string",
                    "required" : true
                },
            },
            supportedActions: []
        }
    ),
    invoke: (conversation, done) => {
        const { selectedReport } = conversation.properties();

            getExpenses().then((data) => {
                
                if(data.status == "OK"){
                //array variable filled with expenses
                var array = data.results;
                //number of expenses within selected report
                var numberOfExpenses = array.length;
                var totalAmount = 0;
                var expenses = [];
                for (let i = 0; i < array.length; i++)
                    {
                        const expense = array[i];

                        expenses[expense.EXPENSE_ID] = expense.DESCRIPTION;
                        totalAmount = totalAmount + expense.REIMBURSEABLE_AMOUNT;
                    }
                    // "report id: " + selectedReport +  "\n" + "expenses in the report: " + expenses  + "\n"+ "total to reimburse: " + totalAmount

                    // conversation.reply(`Here are the results for report: ${selectedReport}`);
                    // conversation.reply(`Number of expenses within report: ${numberOfExpenses}`);
                    // conversation.reply({
                    //     type:"text",
                    //     iteratorVariable: expenses
                    // })

                    // // conversation.reply({
                        // //     text:`Number of expenses within report: ${numberOfExpenses}. Expenses within the report ${expenses}.The total amount to be reimbursed: ${totalAmount}`
                        // // });
                    //     var rawMessage = conversation.MessageModel().rawConversationMessage(
                    //         {
                    //             type: "text",
                    //             text: `Here are the results for report: ${selectedReport}. Number of expenses within report: ${numberOfExpenses}.`,
                    //             iteratorVariale: expenses,
                    //             separateBubbles: false
                    //         }
                    //         );
                    // conversation.reply(rawMessage);
                    conversation.reply("Placeholder, we retrieved data");
                    // conversation.reply(`The total amount to be reimbursed: ${totalAmount}`);
                    conversation.keepTurn(false);
                    conversation.transition();
                    done();
                }else{
                    conversation.reply("Something went wrong. Please try again later");
                    done();
                }
                done();
            });

        function getExpenses()
        {
            return axios.get(`https://skapi9-acnoraclesg01.gbcom-south-1.oraclecloud.com/api/v2/expenses/1122507-1`).then((res) => {
                return res.data;
            }).catch(error => {
                console.log("error", error);
            });
        }
    }
}