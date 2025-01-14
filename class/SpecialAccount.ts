import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  specialDeposit = (value: number): void => {
    if (this.validateStatus() && value > 0) {
      console.log('Voce depositou de forma especial')
      this.balance += value+10
    }
  }
}
