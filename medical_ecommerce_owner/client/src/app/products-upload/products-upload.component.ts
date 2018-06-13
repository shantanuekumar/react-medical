import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Router } from '@angular/router';
// import { map } from 'rxjs/operators/map';
// import { Observable } from 'rxjs/Observable';
import { AuthenticationService,Products } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products-upload',
  templateUrl: './products-upload.component.html',
  styleUrls: ['./products-upload.component.css']
})

export class ProductsUploadComponent implements OnInit {

  product: Products = {
    product_category: '',
    product_category_id: null,
    product_subcategory: '',
    product_label: '',
    product_id: '',
    product_price: null,
    product_promotion: null,
    product_availability: null,
    product_brand: '',
    product_image: '',
    product_image_name: '',
    product_chemical_composition: '',
    product_unit: '',
    product_distributor: '',
    product_stock_id: '',
    product_stock_expiry_date: null,
    product_quantity_per_stock: null
  }

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  
  Name:string; 
  myFile:File; /* property of File type */
  fileChange(event: any,name: any){
    
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
            this.product.product_image = event.target.result;
            this.product.product_image_name = name[0].name; 
           
        }
        reader.readAsDataURL(event.target.files[0]);
    }    
  }



  upload(){
    this.auth.upload_product(this.product).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/upload_product');

    }, (err) => {
      console.error(err);
    });

  }

  

  
  
}


