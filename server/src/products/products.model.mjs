import mongoose from 'mongoose';
import autoPopulate from 'mongoose-autopopulate';
import paginate from 'mongoose-paginate-v2';

const ProductsSchema = new mongoose.Schema({
    title:{
        type:String, 
        required: true,
    },
    price:{
        type:Number, 
        required: true,
    }
});

ProductsSchema.plugin(autoPopulate);
// ProductsSchema.plugin(paginate);

export const Product = new mongoose.model('Product', ProductsSchema);