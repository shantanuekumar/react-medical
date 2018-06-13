var mongo = require('mongoose');
var float = require('mongoose-float').loadType(mongo);

// var categorySchema = new mongo.Schema({
//     category: String,
//     category_id: Number,
//     subcategory: String
// });

// var stockExpiry = new mongo.Schema({
//     stock_id: String,
//     stock_expiry_date: Date,
//     quantity_per_stock: Number 
// });

var productSchema = new mongo.Schema({
    product_category: {
                        category: String,
                        category_id: Number,
                        subcategory: String
                     }, 
    label: String,
    product_id: String,
    price: float,
    promotion: Number,
    availability: Number,
    brand: String,
    image: String, 
    chemical_composition: String,
    unit: String,// eg: 30pills/leaf, sache, bottle etc
    distributor: String,
    stock: {
            stock_id: String,
            stock_expiry_date: Date,
            quantity_per_stock: Number 
           }
});

module.exports = mongo.model('Product',productSchema);