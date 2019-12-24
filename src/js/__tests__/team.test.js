import Team from '../Team';
import Character from '../Person';

const lora = new Character('Lora', 'Magician');
const ursam = new Character('Ursam', 'Daemon');
const mankal = new Character('Mankal', 'Swordsman');

describe('Team', () => {
  it('method add should add one hero to team', () => {
    const expected = new Set([lora]);

    const team = new Team();
    team.add(lora);
    expect(team.members).toEqual(expected);
  });

  it('method add should throw an Error when add one hero twice', () => {
    const result = () => {
      const team = new Team();
      team.add(lora);
      team.add(lora);
    };

    expect(result).toThrow(new Error('Герой уже был добавлен в команду ранее'));
  });

  it('method addAll should add All heros to team', () => {
    const expected = new Set([lora, ursam, mankal]);

    const team = new Team();
    team.addAll(lora, ursam, mankal);
    expect(team.members).toEqual(expected);
  });

  it('method toArray should return an array of heroes', () => {
    const expected = [...(new Set([lora, ursam, mankal]))];

    const team = new Team();
    team.addAll(lora, ursam, mankal);
    const result = team.toArray();

    expect(result).toEqual(expected);
  });
});
