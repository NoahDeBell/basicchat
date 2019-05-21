'use strict';

//base variable for executing http requests
var axios = require('axios');

module.exports = {
    metadata: ()=> (
        {
            name: 'CustomListComponent',
            properties: {
                "selectedReport":
                {
                    "type" : "string",
                    "required" : true
                },
                "userId":
                {
                    "type": "string",
                    "required":true
                },
                "apiUrl":
                {
                    "type":"string",
                    "required":true
                }
            },
            supportedActions: []
        }
    ),
    invoke: (conversation, done) => {
        const { userId } = conversation.properties();
        const { selectedReport } = conversation.properties();
        const { apiUrl } = conversation.properties();

            /**
             * execute http request on the load of our component
             */
            getExpenses().then((data) => {
                /**
                 * check if there is data gathered from our api
                 * if so, we parse it and send it to the user
                 * if there is something wrong with the res var, we print an error message to the user
                 */
                if(data.status == "OK"){
                //array variable filled with expenses
                var array = data.results;
                //number of expenses within selected report
                var numberOfExpenses = array.length;
                //total amount to be reimbursed, later used to print towards the user
                var totalAmount = 0;
                var expenses = [];
                //loop over the returned object building our expenses array
                for (let i = 0; i < array.length; i++)
                    {
                        const expense = array[i];
                        /**
                         *  writing the results towards the expenses array, later on the be used
                         *  to build a string which we return to the user
                        */
                        expenses[expense.EXPENSE_ID] = expense.DESCRIPTION;
                        //simple math for counting the total amount to be reimbursed
                        totalAmount = totalAmount + expense.REIMBURSEABLE_AMOUNT;
                    }
                    //empty string for building the expense list
                    let expensesOut = '';

                    //we build the expenses 'list' string within this foreach
                    expenses.forEach(element => {
                        expensesOut += element + "\n";
                    });

                    /**
                     * down here will be the following replies:
                     *      Report id
                     *      total amount of expenses
                     *      'list of expenses'
                     *      total amount to be reimbursed
                     */
                    conversation.reply(`The expenses for report: ${ selectedReport }`);
                    conversation.reply(`Report contains ${ numberOfExpenses } of expense(s)`);
                    conversation.reply(expensesOut);
                    conversation.reply(`The total amount to be reimbursed: ${ totalAmount }`);
                    conversation.keepTurn(false);
                    conversation.transition();
                }else{
                    conversation.reply("Something went wrong. Please try again later");
                }
                done();
            }).catch(function(err)
            {
                //handle error
                console.log(err);
                conversation.reply("Something went wrong, or you dont have any expenses filled in.");
                done();
            }
            );

            /**
             *  HHTP request to our API
             *  @param selectedReport
             *  @param userId
             *  @return JSON object containing expenses
            */
            function getExpenses()
            {
                return axios.get(`${ apiUrl }${ userId }-${ selectedReport }`).then((res) => {
                    return res.data;
                }).catch(error => {
                    console.log("error", error);
                });
            }
    }
}