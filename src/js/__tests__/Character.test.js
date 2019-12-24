import Character from '../Person';

const expected1 = {
  attack: 25,
  defence: 25,
  health: 100,
  level: 1,
  name: 'Tristan',
  type: 'Bowman',
};
const expected2 = {
  attack: 40,
  defence: 10,
  health: 100,
  level: 1,
  name: 'Orin',
  type: 'Swordsman',
};
const expected3 = {
  attack: 10,
  defence: 40,
  health: 100,
  level: 1,
  name: 'Sam',
  type: 'Magician',
};
const expected4 = {
  attack: 25,
  defence: 25,
  health: 100,
  level: 1,
  name: 'Gorn',
  type: 'Undead',
};
const expected5 = {
  attack: 40,
  defence: 10,
  health: 100,
  level: 1,
  name: 'Yenee',
  type: 'Zombie',
};
const expected6 = {
  attack: 10,
  defence: 40,
  health: 100,
  level: 1,
  name: 'Sangor',
  type: 'Daemon',
};


describe('Character', () => {
  test.each([
    ['Tristan', 'Bowman', expected1],
    ['Orin', 'Swordsman', expected2],
    ['Sam', 'Magician', expected3],
    ['Gorn', 'Undead', expected4],
    ['Yenee', 'Zombie', expected5],
    ['Sangor', 'Daemon', expected6],
  ])('should make new hero %s (%s)', (name, type, expected) => {
    const hero = new Character(name, type);
    expect(hero).toEqual(expected);
  });

  test.each([
    ['Magaturtunar', 'Magician'],
    ['B', 'Swordsman'],
  ])('should throw name Error - %s', (name, type) => {
    expect(() => new Character(name, type)).toThrowError(new Error('Имя персонажа должно быть больше 1, но меньше 10 символов'));
  });

  test('should throw type Error', () => {
    expect(() => new Character('Furazar', 'Demon')).toThrowError(new Error('Неизвестный тип персонажа'));
  });
});
