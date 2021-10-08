import { joinValidation } from './joinValidation';

test('check join validation function to resolve Promise', async () => {
    await expect(joinValidation('testID')).resolves.toBeTruthy();
});
