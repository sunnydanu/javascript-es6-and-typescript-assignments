type tUserAccount = {
  id: string;
  name: string;
  balance: number;
};
type tAccountType = {
  accountType: "Saving" | "Current";
  interest: number;
  cash_credit: "N/A";
};

interface iAccountProfile extends tAccountType, tUserAccount {}
type tBank = {
  total: number;
  accounts: iAccountProfile[];
};

class Bank {
  static total: tBank["total"] = 0;
  static accounts: tBank["accounts"] = [];
  static getBankBalance(): tBank["total"] {
    return this.total;
  }

  static updateBal(newBal: tUserAccount["balance"]) {
    this.total += newBal;
  }
}

class Account {
  id: tUserAccount["id"];
  name: tUserAccount["name"];
  balance: tUserAccount["balance"];
  constructor(
    id: tUserAccount["id"],
    name: tUserAccount["name"],
    balance: tUserAccount["balance"]
  ) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    Bank.updateBal(this.balance);
  }
}

class SavingAccount extends Account {
  accountType: tAccountType["accountType"];
  cash_credit: tAccountType["cash_credit"];
  interest: tAccountType["interest"];

  constructor(
    id: tUserAccount["id"],
    name: tUserAccount["name"],
    balance: tUserAccount["balance"]
  ) {
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
  accountType: tAccountType["accountType"];
  cash_credit: tAccountType["cash_credit"];
  interest: tAccountType["interest"];

  constructor(
    id: tUserAccount["id"],
    name: tUserAccount["name"],
    balance: tUserAccount["balance"]
  ) {
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
