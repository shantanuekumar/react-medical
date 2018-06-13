import React from 'react';
import Link from 'react-router-dom/Link';
import {connect} from 'react-redux';
import {userActions} from '../_actions';


class InsertProductsPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            product:{
                product_category: '',
                product_category_id:'',
                product_subcategory:'',
                product_label:'',
                product_id:'',
                product_price: 0,
                product_promotion:'',
                product_availability:'',
                product_brand:'',
                product_chemical_composition:'',
                product_unit:'',
                product_distributor:'',
                product_stock_id:'',
                product_stock_expiry_date:'',
                product_quantity_per_stock:'',
                product_image:'',
                product_image_name:''

            },
            submitted: false
        }

        this.handleDate = this.handleDate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileChange = this.fileChange.bind(this);
    }

    handleDate(e){
        e.currentTarget.type = "date";
       
    }

    handleChange(e){
        const {name, value} = e.target;
        const {product} = this.state;
        this.setState({
            product: {
                ...product,
                [name]: value
            }
        });
    }

    fileChange(e){
        
        const {product} = this.state;
        const name = e.target.files[0].name;
        if (e.target.files && e.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (e) => {
              product.product_image = e.target.result;              
              product.product_image_name = name;   
            
            }
          reader.readAsDataURL(e.target.files[0]);
        }    
    }

    handleSubmit(event){
        event.preventDefault();

        this.setState = ({submitted: true});
        const {product} = this.state;
        const {dispatch} = this.props;
        
            if(product.product_category && product.product_category_id && product.product_subcategory && product.product_id && product.product_label && 
        product.product_price && product.product_promotion && product.product_availability && product.product_brand && product.product_chemical_composition && product.product_unit && 
        product.product_distributor && product.product_stock_id && product.product_stock_expiry_date && product.product_quantity_per_stock && product.product_image && product.product_image_name){
            dispatch(userActions.upload(product));
        }

    }

    render(){

        const {uploading} = this.props;
        const {product, submitted} = this.state;
        
        return(
        <div className="container">

            <div className="col-md-9">
            <h2 className="lead" id="upload">Upload products</h2>
            <form 
            onSubmit={this.handleSubmit}
            >
            <div className="upload-left">
              <div className="form-group">
                <input type="text" className="form-control" name="product_category" value={product.product_category} placeholder="product category" onChange={this.handleChange}/>
                <input type="number" className="form-control" name="product_category_id" value={product.product_category_id} placeholder="product category id" onChange={this.handleChange}/>
                <input type="text" className="form-control" name="product_subcategory" value={product.product_subcategory} placeholder="product subcategory" onChange={this.handleChange}/>          
              </div>
            
              <div className="form-group">
                <input type="text" className="form-control" name="product_label" value={product.product_label} placeholder="product label" onChange={this.handleChange}/>                
                <input type="text" className="form-control" name="product_id" value={product.product_id} placeholder="product id" onChange={this.handleChange}/>
                <input type="number" className="form-control" name="product_price"  value={product.product_price} step="0.01" placeholder="product price" onChange={this.handleChange}/>
                
              </div>
             
              <div className="form-group">
                <input type="number" className="form-control" name="product_promotion" value={product.product_promotion} placeholder="product promotion" onChange={this.handleChange}/>
                <input type="number" className="form-control" name="product_availability" value={product.product_availability} placeholder="product availability" onChange={this.handleChange}/>
                <input type="text" className="form-control" name="product_brand" value={product.product_brand} placeholder="product brand" onChange={this.handleChange}/>
                
              </div>
            
              <div className="form-group">
                <input type="text" className="form-control" name="product_chemical_composition" value={product.product_chemical_composition} placeholder="chemical composition" onChange={this.handleChange}/>               
                <input type="text" className="form-control" name="product_unit" value={product.product_unit} placeholder="unit" onChange={this.handleChange}/>
                <input type="text" className="form-control" name="product_distributor" value={product.product_distributor} placeholder="distributor" onChange={this.handleChange}/>         
              </div>
             
              <div className="form-group">
                <input type="text" className="form-control" name="product_stock_id" value={product.product_stock_id} placeholder="stock id" onChange={this.handleChange}/>
                <input type="text" className="form-control" name="product_stock_expiry_date" value={product.product_stock_expiry_date}
                onFocus={this.handleDate} 
                placeholder="stock expiry date" onChange={this.handleChange}/>
                <input type="number" className="form-control" name="product_quantity_per_stock" value={product.product_quantity_per_stock} placeholder="quantity per stock" onChange={this.handleChange}/>
                
              </div>
            </div>
            
            <div className="upload-right">
                <label 
                htmlFor="product_image"
                className="custom-file-upload"  onChange={this.fileChange}  >
                <img src="/images/upload-arrow.png" onChange={this.handleChange}/>
                <p className="product-image">product image</p></label>
                <input type="file" className="file" name="product_image"
                
                id="product_image"
                 onChange={this.fileChange}/>
                 <button type="submit" className="btn btn-default">upload</button>
            </div>
             
            </form>
            </div>
          
          </div>
        );
    }
}


function mapStateToProps(state){

    const {uploading} = state.uploading;
    return {
        uploading
    };
}

const connectedInsertProductsPage = connect(mapStateToProps)(InsertProductsPage);

export {connectedInsertProductsPage as InsertProductsPage};