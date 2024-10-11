import { getMonth } from '.';

describe('Date helper', () => {
    describe('When getMonth is called', () => {
        // Ce test vérifie que la fonction retourne "janvier" pour la date 2022-01-01
        it('the function return janvier for 2022-01-01 as date', () => {
            // Création de la date du 1er janvier 2022
            const date = new Date('2022-01-01');
            // On s'attend à ce que la fonction getMonth renvoie "janvier"
            expect(getMonth(date)).toEqual('janvier');
        });
        // Ce test vérifie que la fonction retourne "juillet" pour la date 2022-07-08
        it('the function return juillet for 2022-07-08 as date', () => {
            // Création de la date du 8 juillet 2022
            const date = new Date('2022-07-08');
            // On s'attend à ce que la fonction getMonth renvoie "juillet"
            expect(getMonth(date)).toEqual('juillet');
        });
    });
});