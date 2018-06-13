
import React from 'react';
import Link from 'react-router-dom/Link';




export class LandingPage extends React.Component {

    render(){
        return (
            <div>
            <header>
                <h2 className="header">
                <Link to="/" >Medicana</Link>
                </h2>
                  <div className="center"><input type="text" placeholder="Search for products"></input><button id="search-icon"><img id="search" src="./images/search.png"></img></button></div>
                  <ul className="right">
                    <li><Link to="/cart" >
                    <img id="cart" src="./images/bag.png"></img>
                    </Link>
                    </li>
                    <li>
                    <Link to="/login" >
                    <img id="user" src="./images/user.png"></img>
                    </Link>
                    </li>
                  </ul>
              </header>
              <content  >
               
                <ul id="list">
                  <li><a href="#">PERSONAL CARE</a>
                  <ul id="inner-list">
                      <li><a href="#">SKIN CARE</a></li>
                      <li><a href="#">BATH & BODY</a></li>
                      <li><a href="#">ADULT CARE</a></li>
                      <li><a href="#">FEMININE CARE</a></li>
                      <li><Link to='/products'>HAND AND FOOT CARE</Link></li>
                  </ul>
                  </li>
                  <li><a href="#">BEAUTY</a>
                  <ul id="inner-list">
                    <li><a href="#">BEAUTY ACCESSORIES</a></li>
                    <li><a href="#">MAKE UP</a></li>
                  </ul>
                  </li>
                  <li><a href="#">MOM & BABY</a>
                  <ul id="inner-list">
                    <li><a href="#">BABY DIAPERS</a></li>
                    <li><a href="#">FEEDING & NURSING</a></li>
                    <li><a href="#">GIFTS & ACCESSORIES</a></li>
                    <li><a href="#">HEALTH & SAFETY</a></li>
                    <li><a href="#">NUTRITION</a></li>
                    <li><a href="#">PERSONAL CARE</a></li>
                  </ul>
                   </li>
                   <li><a href="#">NUTRITION</a>
                   <ul id="inner-list">
                     <li><a href="#">FOODS & DRINKS</a></li>
                     <li><a href="#">SEXUAL WELLNESS</a></li>
                     <li><a href="#">SPECIAL NUTRITION NEEDS</a></li>
                     <li><a href="#">SPORTS NUTRITION</a></li>
                     <li><a href="#">VITAMINS & SUPPLEMENTS</a></li>
                   </ul>
                   </li>
                   <li><a href="#">HEALTH CARE</a>
                   <ul id="inner-list">
                     <li><a href="#">DIABETES MANAGEMENT</a></li>
                     <li><a href="#">HEALTH ACCESSORIES</a></li>
                     <li><a href="#">HOME HEALTHCARE</a></li>
                     <li><a href="#">HOME TESTING KITS</a></li>
                     <li><a href="#">WEIGHT MANAGEMENT</a></li>
                   </ul>
                   </li>
                   <li><a href="#">SPECIAL OFFER</a></li>
                   <li><a href="#">HOLLAND & BARRETT</a>
                     <ul id="inner-list">
                         <li><a href="#">FOOD & DRINK</a></li>
                         <li><a href="#">SPORTS NUTRITION</a></li>
                         <li><a href="#">VITAMINS & SUPPLEMENTS</a></li>
                         <li><a href="#">WEIGHT MANAGEMENT</a></li>
                       </ul>
                   </li>
                   <li><a href="#">MEDICANA PRODUCTS</a>
                     <ul id="inner-list">
                         <li><a href="#">BABY & MOTHER</a></li>
                         <li><a href="#">BEAUTY</a></li>
                         <li><a href="#">HEALTHCARE & DEVICES</a></li>
                         <li><a href="#">NUTRITION</a></li>
                         <li><a href="#">PERSONAL CARE</a></li>
                       </ul>
                   </li>
                   <li><a href="#">SHOP BY BRAND</a></li>
                 </ul>
               </content>
               </div>  
                
        );
    }
}