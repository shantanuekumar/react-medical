import React from 'react';
import Link from 'react-router-dom/Link';
import {connect} from 'react-redux';


class ProductPage extends React.Component{

    
    render(){

            return(
            this.props.getProduct.product.map((prod)=>{
             
           
            
            if(prod.label == this.props.match.params.label){
            return(
            <div key={prod.label}>
            
            <img id="left" src={prod.image} />
        
            <div id="details">
            <p>{prod.label}</p>
            <span>By <a href="#">{prod.brand}</a></span>
            <p id="price">₹{prod.price}</p>
            </div>
            <div id="a2cart">
            <Link id="Link" to="/cart" 
            // (onClick)="AddProduct(p)"
            >ADD TO CART</Link>
            <button>BUY NOW</button>
            </div>
        

            </div>     
            );
        }

        }))  

        }
}



function mapStateToProps(state){

    const { getProduct , authentication } = state;
    const { product } = authentication;
    return {
        product,
        getProduct
    };
}

const connectedProductPage = connect(mapStateToProps)(ProductPage);
export {connectedProductPage as ProductPage};
