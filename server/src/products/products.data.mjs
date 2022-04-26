import {ObjectId} from 'mongodb';
import { getUserById } from "../users/users.data.mjs";
import { Product } from './products.model.mjs';

export async function getAllProducts({title, price_lt, price_gt, page=1, limit=10}) {
    const filter = {};

    if(title)
        filter.title = new RegExp(title, "i");
    
    if(price_gt || price_lt) {
        filter.price = {};
        if(price_gt)
            filter.price.$gt = parseInt(price_gt);
        if(price_lt)
            filter.price.$lt = parseInt(price_lt);
    }

    return Product
        .find(filter)
}

export async function getProductById(id) {
    return Product
        .findById(id)
}

export async function addProduct(newProduct, sellerId = null) {
    const product = new Product(newProduct);
    product.seller = sellerId;
    return product.save();
}

export async function removeProduct(id) {
    return Product.findByIdAndDelete(id);
}

export async function editProduct(id, newProduct) {
    return Product.findByIdAndUpdate(id, newProduct);
}