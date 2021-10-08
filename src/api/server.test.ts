import { connectGame } from './server';

test('should throw error', async () => {
    await expect(connectGame('')).rejects.toThrow('нет ID');
});
