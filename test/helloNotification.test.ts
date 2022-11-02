import HelloNotification from '../src';

test('hello', async () => {
  expect(await HelloNotification()).toBe('hello, world!');
});
