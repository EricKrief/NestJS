import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {

    products: Product[] = [];

    addProduct(id: string, name: string, price: number, quantity: number) {
        const newProduct = new Product(id, name, price, quantity);
        this.products.push(newProduct);
    }

    getProducts() {
        return [...this.products];
    }

    getProduct(id: string) {
        return this.products.find(p => p.id === id);
    }

    updateProduct(id: string, newName: string) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            return null;
        }
        product.name = newName;
        return product;
        
    }
}