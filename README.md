# PROJECT 'CASH REGISTER'

'Cash Register' is made with JavaScript.

## HOW THIS CODE IS WORKING

A cash register drawer function checkCashRegister() accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument. cid is a 2D array listing available currency.<br/>
The checkCashRegister() function return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the changekey.

## HOW TO CHECK THIS CODE

For run this code you must use some of code like this:

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

## LICENSE
The MIT License - See [license.md](https://github.com/hajczek/cash-register/blob/master/license/License.md)
