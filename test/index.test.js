import { test } from 'node:test';
import assert from 'node:assert';

test('basic test', () => {
  assert.strictEqual(1 + 1, 2);
});

test('app should be defined', async () => {
  const app = await import('../src/index.js');
  assert.ok(app.default);
});