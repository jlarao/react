import { getGifts } from "../../src/helpers/getGifts"

describe('Pruebas getGifts', () => {
    test('getGifts', async () => {
        const gifts = await getGifts('Dragon Ball');
        expect(gifts.length).toBeGreaterThan(0);
        expect(gifts[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    });
});