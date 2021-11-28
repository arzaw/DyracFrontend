import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UiService } from './services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'vector';
  logged = this.authServices.isLoggedIn();
  subscription: Subscription;

  constructor(private authServices: AuthService, private uiService: UiService){
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.logged = value));
  }
  ngOnInit(): void {
  }

  logout(){
    this.logged = false
    this.authServices.logout()
  }
}
