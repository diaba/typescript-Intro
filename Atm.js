var Atm = /** @class */ (function () {
    function Atm(type, money) {
        this.money = money;
        this.type = type;
    }
    Atm.prototype.withdraw = function (money) {
        if (money < this.money) {
            this.money = this.money - money;
            console.log('Successfully withdraw ${money}');
        }
    };
    Atm.prototype.deposit = function (money) {
        if (money < this.money) {
            this.money = this.money + money;
            console.log("Successfully withdraw ".concat(money));
        }
    };
    Atm.prototype.showBalance = function () {
        console.log("Your balance is " + this.money);
    };
    return Atm;
}());
var checking = new Atm('Checking', 1000);
//check balance
checking.showBalance();
//Add money
checking.withdraw(100);
checking.showBalance();
