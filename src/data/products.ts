export type Comida = {
	id: string;
	nome: string;
	imagem: string;
	tipo: 'tradicional' | '2em1' | '3em1';
	descricao: string;
	precoBase: number;
	sabores: string[];
	adicionais: string[];
};

export type Bebida = {
	id: string;
	nome: string;
	imagem: string;
	precoBase: number;
	descricao: string;
};

export type Produto = Comida | Bebida;

export const products: {
	comidas: Comida[];
	bebidas: Bebida[];
} = {
	comidas: [
		{
			id: 'pastel-tradicional',
			imagem: './pastel-tradicional.svg',
			nome: 'Pastel Tradicional',
			tipo: 'tradicional',
			descricao: 'Sabor único',
			precoBase: 12,
			sabores: ['Carne', 'Frango', 'Queijo', 'Pizza', 'Misto'],
			adicionais: [
				'Milho',
				'Azeitona',
				'Ovo',
				'Carne',
				'Queijo',
				'Calabresa',
				'Frango',
				'Presunto',
				'Catupiry',
				'Brocolis',
			],
		},
		{
			id: 'pastel-2em1',
			imagem: './pastel-2em1.svg',
			nome: 'Pastel 2 em 1',
			tipo: '2em1',
			descricao: '2 sabores',
			precoBase: 12,
			sabores: ['Carne', 'Frango', 'Queijo', 'Pizza', 'Misto'],
			adicionais: [
				'Milho',
				'Azeitona',
				'Ovo',
				'Carne',
				'Queijo',
				'Calabresa',
				'Frango',
				'Presunto',
				'Catupiry',
				'Brocolis',
			],
		},
		{
			id: 'pastel-3em1',
			imagem: './pastel-3em1.svg',
			nome: 'Pastel 3 em 1',
			tipo: '3em1',
			descricao: '3 sabores',
			precoBase: 15,
			sabores: ['Carne', 'Frango', 'Queijo', 'Pizza', 'Misto'],
			adicionais: [
				'Milho',
				'Azeitona',
				'Ovo',
				'Carne',
				'Queijo',
				'Calabresa',
				'Frango',
				'Presunto',
				'Catupiry',
				'Brocolis',
			],
		},
	],
	bebidas: [
		{
			id: 'refri-lata',
			imagem: './refrigerante-lata.svg',
			nome: 'Refrigerante Lata',
			descricao: '350ml',
			precoBase: 5,
		},
		{
			id: 'agua-tonica',
			imagem: './agua-tonica.svg',
			nome: 'Água Tônica',
			descricao: '350ml',
			precoBase: 5,
		},
		{
			id: 'delvalle-p',
			imagem: './delvalle-450.svg',
			nome: 'DelValle 450ml',
			descricao: '450ml',
			precoBase: 5,
		},
		{
			id: 'ks',
			imagem: './ks.svg',
			nome: 'KS',
			descricao: '290ml',
			precoBase: 5,
		},
		{
			id: 'refri-1l',
			imagem: './refri-1l.svg',
			nome: 'Refri Retornável 1L',
			descricao: '1l',
			precoBase: 9,
		},
		{
			id: 'refri-2l',
			imagem: './refri-2l.svg',
			nome: 'Refri Retornável 2L',
			descricao: '2l',
			precoBase: 11,
		},
		{
			id: 'delvalle-m',
			imagem: './delvalle-m.svg',
			nome: 'DelValle 1,5',
			descricao: '1,5l',
			precoBase: 10,
		},
		{
			id: 'original',
			imagem: './original.svg',
			nome: 'Cerveja Original',
			descricao: '350ml',
			precoBase: 6,
		},
		{
			id: 'cervejas',
			imagem: './cervejas.svg',
			nome: 'Brahma/Skol/Imperio',
			descricao: '350ml',
			precoBase: 5,
		},
		{
			id: 'heineken',
			imagem: './heineken.svg',
			nome: 'Heineken',
			descricao: '350ml',
			precoBase: 8,
		},
	],
};
