import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Field, { FIELD_TYPES } from '../../components/Field';
import Select from '../../components/Select';
import Button, { BUTTON_TYPES } from '../../components/Button';

// fonction qui simule un appel API asynchrone avec un délai
const mockContactApi = () =>
	new Promise(resolve => {
		setTimeout(resolve, 800);
	});

const Form = ({ onSuccess, onError }) => {
	const [sending, setSending] = useState(false);
	const sendContact = useCallback(
    // Retrait des parenthèse parce que evt est le seul paramètre de ma fonction
		async evt => {
			evt.preventDefault();
			setSending(true);
			try {
				await mockContactApi();
				setSending(false);
        // Appel de la fonction onSuccess si l'appel API réussit
				onSuccess();
			} catch (err) {
				setSending(false);
				onError(err);
			}
		},
		[onSuccess, onError],
	);
	return (
		<form onSubmit={sendContact}>
			<div className="row">
				<div className="col">
					<Field placeholder="" label="Nom" />
					<Field placeholder="" label="Prénom" />
					<Select
          // Correction faute orthographe
						selection={['Personnel', 'Entreprise']}
						onChange={() => null}
						label="Personnel / Entreprise"
						type="large"
						titleEmpty
					/>
					<Field placeholder="" label="Email" />
					<Button type={BUTTON_TYPES.SUBMIT} disabled={sending}>
						{sending ? 'En cours' : 'Envoyer'}
					</Button>
				</div>
				<div className="col">
					<Field
						placeholder="message"
						label="Message"
						type={FIELD_TYPES.TEXTAREA}
					/>
				</div>
			</div>
		</form>
	);
};

Form.propTypes = {
	onError: PropTypes.func,
	onSuccess: PropTypes.func,
};

Form.defaultProps = {
	onError: () => null,
	onSuccess: () => null,
};

export default Form;