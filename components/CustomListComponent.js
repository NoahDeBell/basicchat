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
                }
            },
            supportedActions: []
        }
    ),
    invoke: (conversation, done) => {
        const { reportId } = conversation.properties().selectedReport;
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
                        /**
                         * structure:
                         *  rapport id : selectedReport
                         *  number of expenses: numberOfExpenses
                         *  expense id : description
                         *  totale amount: totalAmount
                         */
                        expenses[expense.EXPENSE_ID] = expense.DESCRIPTION;
                        totalAmount = totalAmount + expense.REIMBURSEABLE_AMOUNT;
                    }
                    conversation.MessageModel()
                    .textConversationMessage(
                        "report id: " + reportId +  "\n" 
                        + "expenses in the report: " + expenses  + "\n"
                        + "total to reimburse: " + totalAmount
                    );
                    done();
                }else{
                    conversation.reply("Something went wrong. Please try again later");
                    done();
                }
                done();
            });

        function getExpenses()
        {
            return axios.get(`https://skapi9-acnoraclesg01.gbcom-south-1.oraclecloud.com/api/v2/expenses/1122507-1`).then((res)=> {
                return res.data;
            });
        }
    }
}