import {
	IAuthorInfo,
	ICategory,
	ICurrentSeller,
	IImageLink,
	IQuantitySold,
	Specifications,
} from './interfaces';

export interface Books {
	authors: IAuthorInfo[];
	book_cover: unknown;
	categories: ICategory;
	current_seller: ICurrentSeller;
	description: string;
	images: IImageLink[];
	list_prices: number;
	name: string;
	original_price: number;
	quantiry_sold: IQuantitySold;
	rating_average: number;
	short_description: string;
	specifications: Specifications[];
}
