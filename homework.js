const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((name) => {
    return name.length > 0 && name.length != ""
});

employersNames = employersNames.map((name) => name.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO'],
};

const {cash, eu, rus} = sponsors;
const {cash: [cash0, cash1, cash2, cash3], eu: [eu0, eu1, eu2], rus: [rus0, rus1]} = sponsors;


const calcCash = (cash = 0) => cash.reduce((a, b) => a + b);
const money = calcCash(sponsors.cash);

const sumSponsors = [...eu, ...rus, 'unexpected sponsor']; 

makeBusiness = (owner, director="Victor", cash, emp) => {
console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}
And we have a sponsors: 
${sumSponsors}
Note. Be careful with ${eu0}. It's a huge risk.`);
}
makeBusiness.apply(null, ['Sam', , money, employersNames]);