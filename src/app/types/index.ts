export interface IGalleryItem {
    itemName: string;
    imgSrc: string;
    price: number;
    quantityRemaining: number;
}

export interface ICartItem {
    itemName: string;
    imgSrc: string;
    price: number;
    quantity: number;
    totalCost: number;
}
