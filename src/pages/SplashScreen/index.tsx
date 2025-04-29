import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export default function SplashScreen() {
	const [fadeOut, setFadeOut] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setTimeout(() => {
			setFadeOut(true);
			setTimeout(() => {
				navigate('/home');
			}, 1000);
		}, 4000);

		return () => clearTimeout(timer);
	}, [navigate]);

	return (
		<S.Container className={fadeOut ? 'fade-out' : ''}>
			<S.Logo src="/logo.png" alt="Logo" />
		</S.Container>
	);
}
