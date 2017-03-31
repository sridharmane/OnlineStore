export interface IStoreItem {
    itemName: string;
    imgSrc: string;
    price: number;
    quantityRemaining: number;
    // setQuantity: Function;
}

export interface ICartItem {
    itemName: string;
    imgSrc: string;
    price: number;
    quantity: number;
    totalCost: number;
    quantityRemaining: number;
}
