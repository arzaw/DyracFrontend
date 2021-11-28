import { Component, OnInit } from '@angular/core';
import {ConnectService} from '../services/connect.service'
import { AuthService } from '../services/auth.service';
import {UiService} from '../services/ui.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email !: String;
  password !: String;

  constructor(
    private route: ActivatedRoute,
    private connectServices: ConnectService,
    private authServices: AuthService,
    private redirect: Router,
    private uiService:UiService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (!this.email || !this.password){
      alert('Please fill all Fields')
      return;
    }
    const loginUser ={
      email:this.email,
      password:this.password
    }

    this.connectServices.loginUser(loginUser).subscribe((userData) => {
      this.authServices.setSession(userData)
      this.uiService.toggle()
      this.redirect.navigate(['profile'])
    })
  }
  googleUrl(){
    this.connectServices.getGoogleUrl().subscribe((googleUrl) => {
     const url = Object.values(googleUrl)
     window.location.assign(url[0])
    })
  }

}