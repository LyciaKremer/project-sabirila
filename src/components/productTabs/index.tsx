import * as S from './style';

type ProductTabsProps = {
	active: 'comidas' | 'bebidas';
	onChange: (categoria: 'comidas' | 'bebidas') => void;
};

export function ProductTabs({ active, onChange }: ProductTabsProps) {
	const isComidas = active === 'comidas';

	return (
		<S.Container>
			<S.TabWrapper>
				<S.ActiveIndicator active={active} />
				<S.TabButton isActive={isComidas} onClick={() => onChange('comidas')}>
					Comidas
				</S.TabButton>
				<S.TabButton isActive={!isComidas} onClick={() => onChange('bebidas')}>
					Bebidas
				</S.TabButton>
			</S.TabWrapper>
		</S.Container>
	);
}
