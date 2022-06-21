"use strict";
class Bank {
    static getBankBalance() {
        return this.total;
    }
    static updateBal(newBal) {
        this.total += newBal;
    }
}
Bank.total = 0;
Bank.accounts = [];
class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        Bank.updateBal(this.balance);
    }
}
class SavingAccount extends Account {
    constructor(id, name, balance) {
        super(id, name, balance);
        this.accountType = "Saving";
        this.interest = 4.5;
        this.cash_credit = "N/A";
        Bank.accounts.push({
            id: this.id,
            name: this.name,
            balance: this.balance,
            accountType: this.accountType,
            interest: this.interest,
            cash_credit: this.cash_credit,
        });
    }
}
class CurrentAccount extends Account {
    constructor(id, name, balance) {
        super(id, name, balance);
        this.accountType = "Current";
        this.interest = 4.5;
        this.cash_credit = "N/A";
        Bank.accounts.push({
            id: this.id,
            name: this.name,
            balance: this.balance,
            accountType: this.accountType,
            interest: this.interest,
            cash_credit: this.cash_credit,
        });
    }
}
new SavingAccount("#SA1", "User 1", 20);
new SavingAccount("#SA2", "User 2", 100);
new CurrentAccount("#CA3", "User 3", 900);
new CurrentAccount("#CA4", "User 4", 10);
console.log("Total Bank Bal : ", Bank.getBankBalance());
console.log("Opened Accounts : ", ...Bank.accounts);
