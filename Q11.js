function createWallet() {
  let balance = 0;
  
  return {
    addMoney: function(amount) {
      balance += amount;
      console.log(`Added ${amount}. New balance: ${balance}`);
    },
    
    checkBalance: function() {
      console.log(`Current balance: ${balance}`);
      return balance;
    }
  };
}

// Test
let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();
