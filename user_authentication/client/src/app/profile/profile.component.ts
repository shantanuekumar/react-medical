import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  details: UserDetails;

  constructor(private auth: AuthenticationService) {}
  
  ngOnInit() {    
    this.auth.profile().subscribe(user => {
      // localStorage.setItem('profile',JSON.stringify(user));
      this.details = user;
      
    }, (err) => {
      console.error(err);
    });
  }
}
