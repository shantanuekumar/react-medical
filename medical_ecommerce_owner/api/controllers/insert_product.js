var mongo = require('mongoose');
var Product =  mongo.model('Product');
// var webp=require('webp-converter');
var fs = require('fs');

module.exports.insert_product = (req,res) => {

    var product = new Product();

    
    var base64Data = req.body.product_image.replace(/^data:image\/(jpeg|jpg|png);base64,/, "");
    var imageurl = "/home/shantanu/Downloads/user-end/assets/images/products/hand_n_foot_care/"+req.body.product_image_name;
    fs.writeFile(imageurl, base64Data, 'base64', function(err) {
        if(err){
            res.json({
                "error": err
            })
        }
    });

    var image = "/assets/images/products/hand_n_foot_care/"+req.body.product_image_name;

   
//     webp.cwebp(imageurl,"/home/shantanu/Pictures/output.webp","-q 80",function(status)
//   {
//   	//if exicuted successfully status will be '100'
//       //if exicuted unsuccessfully status will be '101'
//       res.json({
//           "status": status 
//       })
//   	console.log(status);
//   });
        

    product.product_category.category = req.body.product_category;
    product.product_category.category_id = req.body.product_category_id;
    product.product_category.subcategory = req.body.product_subcategory;
    product.label = req.body.product_label;
    product.product_id = req.body.product_id;
    product.price = req.body.product_price;
    product.promotion = req.body.product_promotion;
    product.availability = req.body.product_availability;
    product.brand = req.body.product_brand;
    product.image = image;
    product.chemical_composition = req.body.product_chemical_composition;
    product.unit = req.body.product_unit;
    product.distributor = req.body.product_distributor;
    product.stock.stock_id = req.body.product_stock_id;
    product.stock.stock_expiry_date = req.body.product_stock_expiry_date;
    product.stock.quantity_per_stock = req.body.product_quantity_per_stock;

    product.save(function(err){
        res.status(200);
        res.json({
            "brand": "success"
        })
    })
}












