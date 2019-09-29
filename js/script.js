function checkCashRegister(price, cash, cid) {
  // Calculate a change
  let change = cash - price;
  // Define variable for a sum
  let sum = 0;
  // Define variable for all money
  let allMoney = 0;

  // Calculate all money and add to a variable allMoney
  for(let i = 0; i < cid.length; i++){
      allMoney += cid[i][1];
  }

  // Define each of values which are in cash register
  const PENNY = cid[0][1];
  const NICKEL = cid[1][1];
  const DIME = cid[2][1];
  const QUARTER = cid[3][1];
  const ONE = cid[4][1];
  const FIVE = cid[5][1];
  const TEN = cid[6][1];
  const TWNETY = cid[7][1];
  const HUNDRED = cid[8][1];

  // Define object for result
  let result = {
    status: '',
    change: []
  };

  // Condition for all status of operation on cash register
  if(allMoney == change){
    result.status = "CLOSED";
  } else if(allMoney > change) {
    result.status = "OPEN";
  } else if(allMoney < change || change < PENNY || NICKEL || DIME || QUARTER || ONE || FIVE || TEN || TWNETY || HUNDRED){
    result.status = "INSUFFICIENT_FUNDS";
  }
  
  // Conditions for value "ONE HUNDRED"
  if(change > 100 && HUNDRED > 0){
     if(change - HUNDRED > 0) {
      sum = HUNDRED;
      result.change.push(["ONE HUNDRED", sum]);
      change = (change - HUNDRED).toFixed(2);
    } else if (HUNDRED - change > 0){
      sum = Math.round(change / 100);
      result.change.push(["ONE HUNDRED", sum * 100]);
      change = (change - 100 * sum).toFixed(2);
    } else {
      result.status = 'INSUFFICIENT_FUNDS';
    }
  }

  // Conditions for value "TWENTY"
  if(change > 20 && TWNETY > 0){
    if(change - TWNETY > 0) {
      let sum = TWNETY;
      result.change.push(["TWENTY", sum]);
      change = (change - TWNETY).toFixed(2);
    } else if(TWNETY - change > 0){
      let sum = Math.round(change / 20);
      result.change.push(["TWENTY", sum * 20]);
      change = (change - 20 * sum).toFixed(2);
    } else {
      result.status = 'INSUFFICIENT_FUNDS';
    }
  }

  // Conditions for value "TEN"
  if(change > 10 && TEN > 0){
    if(change - TEN > 0) {
      sum = TEN;
      result.change.push(["TEN", sum]);
      change = (change - TEN).toFixed(2);
    } else if(TEN - change > 0) {
      sum = Math.round(change / 10);
      result.change.push(["TEN", sum * 10]);
      change = (change - 10 * sum).toFixed(2);
    } else {
      result.status = 'INSUFFICIENT_FUNDS';
    }
  }

  // Conditions for value "FIVE"
  if(change > 5 && FIVE > 0){
    if(change - FIVE > 0) {
      sum = FIVE;
      result.change.push(["FIVE", sum]);
      change = (change - FIVE).toFixed(2);
    } else if(FIVE - change > 0) {
      sum = Math.round(change / 5);
      result.change.push(["FIVE", sum * 5]);
      change = (change - 5 * sum).toFixed(2);
    } else {
      result.status = 'INSUFFICIENT_FUNDS';
    }
  }

  // Conditions for value "ONE"
  if(change > 1 && ONE > 0){
    if(change - ONE > 0) {
      sum = ONE;
      result.change.push(["ONE", sum]);
      change = (change - ONE).toFixed(2);
    } else if(ONE - change > 0) {
      let rest = change - 1;
      if(rest < 1){
        let sum = 1;
        result.change.push(["ONE", sum]);
        change = (change - 1).toFixed(2);
      } 
    } else {
      result.status = 'INSUFFICIENT_FUNDS';
    }
  }

  // Conditions for value "QUARTER"
  if(change > 0.25 && QUARTER > 0){
    if(change - QUARTER > 0) {
      sum = Math.floor(change / 0.25);
      result.change.push(["QUARTER", 0.25 * sum]);
      change = (change - (0.25 * sum)).toFixed(2);
    } else if(QUARTER - change > 0) {
      let rest = Math.floor(change / 0.25);
      result.change.push(["QUARTER", 0.25 * rest]);
      change = (change - (0.25 * rest)).toFixed(2);
    } else {
      result.status = 'INSUFFICIENT_FUNDS';
    }
  }

  // Conditions for value "DIME"
  if(change > 0.1 && DIME > 0){
    if(DIME / 0.1) {
      sum = Math.floor(change / 0.1);
      result.change.push(["DIME", 0.1 * sum]);
      change = (change - sum * 0.1).toFixed(2);;
    } else if(DIME - change > 0) {
      let rest = Math.floor(change / 0.1);
      sum = 0.1 * rest;
      result.change.push(["DIME", sum]);
      change = (change - sum * 0.1).toFixed(2);
    } else {
      result.status = 'INSUFFICIENT_FUNDS';
    }
  }

  // Conditions for value "NICKEL"
  if(change > 0.05 && NICKEL > 0) {
    console.log('more than 0.05');
    if(change - NICKEL == 0) {
      sum = Math.floor(change / 0.05);
      result.change.push(["NICKEL", 0.05 * sum]);
      change = (change - 0.05 * sum).toFixed(2);
    } else if(NICKEL - change > 0){
      let rest = Math.floor(change / 0.05);
      sum = 0.05 * rest;
      result.change.push(["NICKEL", sum]);
      change = (change - sum * 0.05).toFixed(2);
    } else {
      result.status = 'INSUFFICIENT_FUNDS';
    }
  }

  // Conditions for value "PENNY"
  if(change > 0.01 && cid[0][1] > 0) {
    if(change - PENNY == 0) {
      sum = Math.floor(change / 0.01);
      result.change.push(["PENNY", 0.01 * sum]);
      change = change - 0.01 * sum;
    } else if(PENNY - change > 0){
      let rest = Math.floor(change / 0.01);
      sum = 0.01 * rest;
      result.change.push(["PENNY", sum]);
      change = (change - sum);
    } else {
      result.status = 'INSUFFICIENT_FUNDS';
    }
  }

  // Condition for status 'CLOSED'
  if(result.status == 'CLOSED'){
      result.change = [
        ["PENNY", cid[0][1]], 
        ["NICKEL", cid[1][1]], 
        ["DIME", cid[2][1]], 
        ["QUARTER", cid[3][1]], 
        ["ONE", cid[4][1]], 
        ["FIVE", cid[5][1]], 
        ["TEN", cid[6][1]], 
        ["TWENTY", cid[7][1]], 
        ["ONE HUNDRED", cid[8][1]]];
  }

  // Condition for status 'INSUFFICIENT_FUNDS'
  if(result.status == 'INSUFFICIENT_FUNDS'){
    result.change = [];
  }

  return result;
}

// Code for test function
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);