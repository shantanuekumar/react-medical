import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import {Buffer} from 'buffer';

export interface UserDetails {
  _id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
}

export interface Products {
  product_category: String,
  product_category_id: Number,
  product_subcategory: String,
  product_label: String,
  product_id: String,
  product_price: Number,
  product_promotion: Number,
  product_availability: Number,
  product_brand: String,
  product_image: String,
  product_image_name: String,
  product_chemical_composition: String,
  product_unit: String,
  product_distributor: String,
  product_stock_id: String,
  product_stock_expiry_date: Date,
  product_quantity_per_stock: Number
}


@Injectable()
export class AuthenticationService {
  private token: string;

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  private request(method: 'post'|'get', type: 'login'|'register'|'profile', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`/api/${type}`, user);
    } else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

  public register(user: TokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }

  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }

  
  
  
  
  
  
  
  // products upload
  
  private requ(method: 'post'|'get', type: 'upload', product: Products): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`/api/${type}`, product);
     
    }
    
    const requ = base.pipe(
      map((data) => {
        return data;
      })
    );

    return requ;
  }

  public upload_product(product): Observable<any>{
    return this.requ('post' , 'upload', product);
 }


}





