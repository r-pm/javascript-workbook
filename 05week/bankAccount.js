'use strict';

let assert = require('assert');
// For this assignment we are creating 2 classes that can be used to represent a Bank Account and the transactions it holds.

class BankAccount {

  constructor(accountNumber, owner){
    this.accountNumber = accountNumber;//String representing the account number 
    this.owner = owner;//String representing the owner of the account
    this.transactions = []; //an array of transactions representing the history of all transactions associated with this account
                            //the array will contain entire transaction objects 
  }

  balance(){
    if(this.transactions.length > 0){
      let balanceAmount = this.transactions.reduce((accumulator, currentValue) => {//reduce() works w literal accumulator & currentValue params, replaced by initial value & next array item
        return accumulator + currentValue.amount;//will add AMOUNT of ea array item to initial value, 0
        //adds up all transactions[]items using reduce()
        //returns the current balance on the account
      }, 0);
    }else{
      return 0;
    }

  }

  deposit(amount){
    if (amount > 0){//You should not be able to deposit a negative amount
      let transaction = new Transaction(amount,payee);//creates a new transaction with the payee and amount 
      this.transactions.push(transaction);//and add it to the transactions array.
    }
  }

  charge(payee, amount){
    if ((this.balance - amount) > 0){//You should not be able to charge an amount that would make you balance dip below 0
      let transaction = new Transaction(amount , payee);//creates a new transaction with the payee and amount 
      this.transactions.push(transaction);//and add it to the transactions array.
    }else if(amount < 0){
      return 'refund';
    }

  }

} 

// 3. The class should have the following 3 methods:
// 	a. balanace() - this method does not take any input, and returns the current balance on the account. The balance is computed 
// 	                by summing up the amounts in the transactions array
// 	b. deposit(amt) - this method takes in a single input, the deposit amount. This method should create a new transaction 
// 	                  representing the deposit, and add it to the transactions array.
// 	                - You should not be able to deposit a negative amount                
// 	c. charge(payee, amt) - this method takes in the payee and amount, creates a new transaction with the payee and amount, and 
// 	                        adds the transaction to the transaction array
// 	                      - You should not be able to charge an amount that would make you balance dip below 0


class Transaction{
  constructor(amount, payee){
    this.amount = amount;//amount of the transaction. Positive amounts are money going into the account (deposit, refund). Negative amounts are money coming out of the account (a charge, or debit)
    this.payee = payee;//description or payee on the transaction 
    this.today = new Date(); /// does this need to be passed as param?

  }

}


// Stretch Goal: SavingsAccount Class - This class should extend the BankAccount Class
// ----------------------------------
// 1. The class should have an additional field:
// 	a. interestRate - this value represents the rate at which the account earns interest

// 2. The constructor should take the following as input:
// 	a. accountNumber - see BankAccount class
// 	b. owner - see BankAccount class
// 	c. interestRate - the rate that is used to compute interest

// 3. Additional methods:
// 	a. accrueInterest()  - this method should use the balance() to get the current balance, and add a new transaction representing a deposit of the appropriate amount.




//Tests
if (typeof describe === 'function'){
  describe('BankAccount', function(){
    it('should create a new account with all methods working', function(){//describe
      let acct1 = new BankAccount("5553429", "John Doe");//example passing in 
      assert.equal(acct1.accountNumber, '5553429');//keep assert.equal(what im feeding, 'what it expects')
      assert.equal(acct1.owner, 'John Doe');//should return name of owner as provided above
    });
  });
  describe('BankAccount', function(){
    it('should check that balance starts at zero', function(){//describe
      let acct1 = new BankAccount("5553429", "John Doe");//example passing in 
      assert.equal(acct1.balance(), 0);//at start, a balance of 0
    });
  });
  describe('BankAccount', function(){
    it('should receive deposit & update balance', function(){//describe
      let acct1 = new BankAccount("5553429", "John Doe");//example passing in 
      assert.equal(acct1.deposit(100), 100);
    });
  });
  describe('BankAccount', function(){
    it('should display refund for credits to charge', function(){//describe
      let acct1 = new BankAccount("5553429", "John Doe");//example passing in 
      assert.equal(acct1.charge("Targé", -20), 'refund');
    });
  });

}

// assert.equal(acct1.charge("Targé", -20), 'refund');
// acct1.charge("Diamond Shop", 1000) // should not be allowed
///testing deposit()
// acct1.deposit(100)
// console.log(acct1.balance()): // 100

// acct1.deposit(-200)  // should not be allowed
// console.log(acct1.balance()): // 100

///testing charge()
// acct1.charge("Target", 30.50)
// acct1.charge("FreeBirds", 15.15)
// console.log(acct1.balance())  //54.35

// console.log(acct1.balance())  //54.35

// acct1.charge("Targe", -20) //refund
// console.log(acct1.balance())  //74.35











