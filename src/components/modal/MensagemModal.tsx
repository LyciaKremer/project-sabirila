import React from 'react';
import * as S from './styles';

interface RegistroModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	message: string;
}

const RegistroModal: React.FC<RegistroModalProps> = ({ isOpen, onClose, title, message }) => {
	if (!isOpen) return null;

	return (
		<S.Overlay>
			<S.ModalContainerMenssage>
				<S.Title>{title}</S.Title>
				<S.SubTitle>{message}</S.SubTitle>
				<S.Actions>
					<S.ActionButton onClick={onClose}>Fechar</S.ActionButton>
				</S.Actions>
			</S.ModalContainerMenssage>
		</S.Overlay>
	);
};

export default RegistroModal;
