class Atm{
    type: string;
    money: number;
    constructor(  type: string, money: number) {
        this.money = money
        this.type =  type;
    }
     withdraw( money: number){
         if(money < this.money){
             this.money = this.money - money;
             console.log('Successfully withdraw ${money}');
             
         }

        }
        deposit( money: number){
            if(money < this.money){
                this.money = this.money + money;
                console.log(`Successfully withdraw ${money}`);
                
            }
        }
        showBalance(){
            console.log("Your balance is "+ this.money);
            

        }
}

let checking = new Atm('Checking', 1000);
//check balance
checking.showBalance();
//withdraw money
checking.withdraw(100);
checking.showBalance();
//deposit
checking.deposit(100);
checking.showBalance();
