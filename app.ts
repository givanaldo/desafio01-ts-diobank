import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(200)
companyAccount.withdraw(50)
console.log(companyAccount)
companyAccount.getLoan(100)
console.log(companyAccount)

const specialAccount: SpecialAccount = new SpecialAccount('John', 30)
specialAccount.specialDeposit(100)
specialAccount.withdraw(50)
console.log(specialAccount)
