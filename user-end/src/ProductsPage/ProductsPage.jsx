import React from 'react';
import Link from 'react-router-dom/Link';
import { userActions } from '../_actions';
import { connect } from 'react-redux';


class ProductsPage extends React.Component{

    componentDidMount(){          
           this.props.dispatch(userActions.getProducts());           
    }

    render(){
        const {getProduct, product} = this.props;
        
       if(!getProduct.product){
           return null;
       }
        return(
            <ul id="products">

            <li 
            // ng-if="id==5" 
            >
             <h3>HAND AND FOOT CARE</h3>
             <div id="handnfootcare">
             <div>

            {getProduct.product.map(function(prod){
                           
             return(
                    <div key={prod._id}>
                    <Link to={`/product/${prod.label}`} >
                    <img  src={prod.image} />
                    </Link>     
                    <Link to={`/product/${prod.label}`}>{prod.label}</Link>     
                    <p>
                        <b>₹{prod.price}</b>
                    </p>
                    </div>
                    );              
             })}           
            </div>
           </div> 
           </li>
           </ul>
        );
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

const connectedProductsPage = connect(mapStateToProps)(ProductsPage);
export {connectedProductsPage as ProductsPage};