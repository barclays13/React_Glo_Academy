const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];


let employersNames = employers.filter(name => name.length > 0 && name.length != "");
employersNames = employersNames.map((name) => name.toLowerCase().trim());

/*
const employersNames = (arr) => {
    employersLong = arr.filter(name => name.length > 0 && name.length != "");
    return employersLong.map(name => name.toLowerCase().trim());
}*/

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO'],
};

const {cash, eu, rus} = sponsors;

const calcCash = (cash = 0) => cash.reduce((a, b) => a + b);
const money = calcCash(sponsors.cash);

const sumSponsors = [...eu, ...rus, 'unexpected sponsor']; 

makeBusiness = ({ 
    owner = 'Samen',
    director="Victor",
    cash = 0,
    emp = ['ludmila', 'viktor']}) => {
        console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}
And we have a sponsors: 
${sumSponsors}
Note. Be careful with ${eu[0]}. It's a huge risk.`);
}

makeBusiness({
    cash:money,
    emp: employersNames,
    owner: 'Sam'
});


