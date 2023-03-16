export interface IAuthorInfo {
	id: number;
	name: string;
	slug: string;
}

/* categories */
export interface ICategory {
	id: number;
	name: string;
	is_leaf: boolean;
}

/* seller */
export interface ICurrentSeller {
	id: number;
	sku: string;
	name: string;
	link: string;
	logo: string;
	price: number;
	productId: string;
	storeId: number;
	isBestStore: boolean;
	isOfflineInstallmentSupport: null | undefined;
}

export interface IImageLink {
	baseUrl: string;
	isGallery: boolean;
	label: unknown;
	large_url: string;
	medium_url: string;
	position: unknown;
	small_url: string;
	thumbail_url: string;
}

export interface IQuantitySold {
	text: string;
	value: number;
}

export interface IAtributes {
	code: string;
	name: string;
	value: string;
}

export interface Specifications {
	name: string;
	id: number;
	atributes: IAtributes[];
}
