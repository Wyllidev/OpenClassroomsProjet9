import { fireEvent, render, screen } from '@testing-library/react';
import Home from './index';

describe('When Form is created', () => {
    it('a list of fields card is displayed', async () => {
        render(<Home />);
        await screen.findByText('Email');
        await screen.findByText('Nom');
        await screen.findByText('Prénom');
        await screen.findByText('Personnel / Entreprise');
    });

    describe('and a click is triggered on the submit button', () => {
        it('the success message is displayed', async () => {
            render(<Home />);
            fireEvent(
                await screen.findByText('Envoyer'),
                new MouseEvent('click', {
                    cancelable: true,
                    bubbles: true,
                }),
            );
            await screen.findByText('En cours');
            await screen.findByText('Message envoyé !');
        });
    });
});

describe('When a page is created', () => {
    // Ce test vérifie que lorsqu'on affiche la page, une liste d'événements est présente
    it('a list of events is displayed', () => {
        // Rend le composant <Home /> pour simuler la page d'accueil
        render(<Home />);
        // Sélectionne l'élément qui contient la liste d'événements en utilisant l'attribut data-testid
        const eventList = screen.getByTestId('event-list');
        // Vérifie que cet élément est défini et présent sur la page
        expect(eventList).toBeDefined();
    });
    // Ce test vérifie qu'une liste de personnes est affichée sur la page
    it('a list a people is displayed', () => {
        // Rend à nouveau le composant <Home />
        render(<Home />);
        // Sélectionne l'élément contenant la liste de personnes
        const peopleList = screen.getByTestId('people-list');
        // Vérifie que cet élément est défini et présent
        expect(peopleList).toBeDefined();
    });
    // Ce test vérifie que le pied de page est bien affiché sur la page
    it('a footer is displayed', () => {
        // Rend une nouvelle fois le composant <Home />
        render(<Home />);
        // Sélectionne l'élément représentant le pied de page avec le data-testid approprié
        const testFooter = screen.getByTestId('test-footer');
        // Vérifie que le pied de page est défini et visible
        expect(testFooter).toBeDefined();
    });
    // Ce test s'assure que la carte contenant le dernier événement est bien affichée
    it('an event card, with the last event, is displayed', () => {
        // Rend le composant <Home />
        render(<Home />);
        // Sélectionne l'élément représentant la carte du dernier événement
        const lastEvent = screen.getByTestId('last-event');
        // Vérifie que cet élément est défini et présent sur la page
        expect(lastEvent).toBeDefined();
    });
});