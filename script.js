import {eu, money, sumSponsors} from './module/sponsors';
import {employersNames} from './module/employersNames';

class MakeBusiness { 
    constructor(owner ,director,cash, emp){ //owner = 'Samen',director="Victor",cash = 0,emp = ['ludmila', 'viktor']}
    this.owner = owner;
    this.director= director;
    this.cash = cash;
    this.emp = emp;
    }

    outputInfo() {
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}
And we have a sponsors: 
${sumSponsors}
Note. Be careful with ${eu[0]}. It's a huge risk.`)}
}

const busines = new MakeBusiness('Sam',"Victor",money,employersNames);
busines.outputInfo();