import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import {ConnectService} from '../services/connect.service'
import { AuthService } from '../services/auth.service';
import {UiService} from '../services/ui.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  userName !: String;
  email !: String;
  password !: String;
  passCheck !: String;

  constructor(
    private route: ActivatedRoute,
    private connectServices: ConnectService,
    private authServices: AuthService,
    private redirect: Router,
    private uiService:UiService) { }

  ngOnInit(): void {
  }

  googleUrl(){
    this.connectServices.getGoogleUrl().subscribe((googleUrl) => {
     const url = Object.values(googleUrl)
     window.location.assign(url[0])
    })
  }
  onSubmit(){
    if (!this.userName || !this.email || !this.password || !this.passCheck){
      alert('Please fill all Fields')
      return;
    }
    if (this.password !== this.passCheck){
      alert('Password dosent Match')
      this.password = ''
      this.passCheck = ''
      return;
    }

    const newUser: User ={
      userName: this.userName,
      email: this.email,
      password: this.password
    }

    this.connectServices.registerUser(newUser).subscribe((userData) => {
      this.authServices.setSession(userData)
      this.uiService.toggle()
      this.redirect.navigate(['profile'])})
  }
}
