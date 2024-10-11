import { render, screen } from '@testing-library/react';
import md5 from 'md5';
import Icon from '.';

describe('Icon component', () => {
    // Test pour l'icône Twitch
	describe('When a icon is created with name twitch', () => {
        // Ce test vérifie que l'icône Twitch contient un chemin (path) spécifique
		it('the icon contain this path hash value 327fbc38c8e878259c3ec35ef231517a', () => {
            // Rend le composant Icon avec le nom "twitch"
			render(<Icon name="twitch" />);
            // Utilise le MD5 pour calculer le hash de l'attribut 'd' du chemin SVG de l'icône
			expect(md5(screen.getByTestId('icon').getAttribute('d'))).toEqual(
				'327fbc38c8e878259c3ec35ef231517a',
			);
		});
	});
    // Test pour l'icône Facebook
	describe('When a icon is created with name facebook', () => {
        // Ce test vérifie que l'icône Facebook contient un chemin (path) spécifique
		it('the icon contain this path hash value bbea4c9e40773b969fdb6e406059f853', () => {
            // Rend le composant Icon avec le nom "facebook"
			render(<Icon name="facebook" />);
            // Vérifie que le hash MD5 de l'attribut 'd' du chemin SVG de l'icône est correct
			expect(md5(screen.getByTestId('icon').getAttribute('d'))).toEqual(
				'bbea4c9e40773b969fdb6e406059f853',
			);
		});
	});
    // Test pour l'icône Twitter
	describe('When a icon is created with name twitter', () => {
        // Ce test vérifie que l'icône Twitter contient un chemin (path) spécifique
		it('the icon contain this path hash value 82f5be4a5c07199cb75dacec50b90b2a', () => {
            // Rend le composant Icon avec le nom "twitter"
			render(<Icon name="twitter" />);
            // Vérifie que le hash MD5 de l'attribut 'd' du chemin SVG de l'icône est correct
			expect(md5(screen.getByTestId('icon').getAttribute('d'))).toEqual(
				'82f5be4a5c07199cb75dacec50b90b2a',
			);
		});
	});
    // Test pour l'icône YouTube
	describe('When a icon is created with name youtube', () => {
        // Ce test vérifie que l'icône YouTube contient un chemin (path) spécifique
		it('the icon contain this path hash value 43342876c2fc40e5b2afe621443ff95b', () => {
            // Rend le composant Icon avec le nom "youtube"
			render(<Icon name="youtube" />);
            // Utilise le MD5 pour calculer le hash de l'attribut 'd' du chemin SVG de l'icône
			expect(md5(screen.getByTestId('icon').getAttribute('d'))).toEqual(
				'43342876c2fc40e5b2afe621443ff95b',
			);
		});
	});
});
