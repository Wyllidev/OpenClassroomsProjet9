import { useEffect, useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { getMonth } from '../../helpers/Date';
import './style.scss';

const Slider = () => {
	const { data } = useData();
	const [index, setIndex] = useState(0);
	const byDateDesc = data?.focus.sort((evtA, evtB) =>
		new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
	);
	const nextCard = () => {
    // Ajout de la condition pour vérifier si l'index actuel est le dernier élément du tableau
		if (byDateDesc) {
			setTimeout(
        // Ajout du -1 pour rendre le carroussel infini
				() => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0),
				5000,
			);
		}
	};
	useEffect(() => {
		nextCard();
	});
	return (
		<div className="SlideCardList">
			{byDateDesc?.map((event, idx) => (
        // key est utilisé pour donner une clé unique à chaque élément du tableau
				<div key={event.title}>
					<div
						key={event.title}
						className={`SlideCard SlideCard--${
							index === idx ? 'display' : 'hide'
						}`}
					>
						<img src={event.cover} alt="forum" />
						<div className="SlideCard__descriptionContainer">
							<div className="SlideCard__description">
								<h3>{event.title}</h3>
								<p>{event.description}</p>
								<div>{getMonth(new Date(event.date))}</div>
							</div>
						</div>
					</div>
					<div className="SlideCard__paginationContainer">
						<div className="SlideCard__pagination">
							{byDateDesc.map((_, radioIdx) => (
								<input
                // Ajout du +1 pour débuter l'index à 1
									key={`${radioIdx + 1}`}
									type="radio"
									name="radio-button"
									checked={index === radioIdx}
                  // L’attribut readOnly est utilisé pour rendre le champ non modifiable par l'utilisateur tout en le maintenant sélectionnable et focusable.
									readOnly
								/>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Slider;