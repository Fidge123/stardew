import { SaveGame } from './transform';

test('Read successful', () => {
  const save = new SaveGame('data/Dragon_187021041/Dragon_187021041');
  expect(save).toBeDefined();
});
