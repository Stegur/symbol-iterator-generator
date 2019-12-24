// TODO: write your code here
import Team from './Team';
import Person from './Person';

const team = new Team();

const lora = new Person('Lora', 'Magician');
const ursam = new Person('Ursam', 'Daemon');
const mankal = new Person('Mankal', 'Swordsman');

// team.add(lora);
// team.add(ursam);
team.add(mankal);
team.addAll(lora, ursam, mankal);

// console.log(team);

// const arrayOfHeroes = team.toArray();
// console.log(team.members);
// console.log(arrayOfHeroes);


// console.log(...team);

for (const hero of team) {
  console.log(hero);
}
