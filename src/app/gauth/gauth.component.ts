import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../services/connect.service';
import { AuthService } from '../services/auth.service';
import {UiService} from '../services/ui.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-gauth',
  templateUrl: './gauth.component.html',
  styleUrls: ['./gauth.component.scss'],
})
export class GauthComponent implements OnInit {
  code !: String
  constructor(
    private route: ActivatedRoute,
    private connectServices: ConnectService,
    private authServices: AuthService,
    private redirect: Router,
    private uiService:UiService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.code = params.code;
      console.log(this.code);
      this.connectServices.googleUser({ code: this.code }).subscribe((userDetail) => {
        this.authServices.setSession(userDetail)
        this.uiService.toggle()
        this.redirect.navigate(['profile'])
      });
    });
  }
}
