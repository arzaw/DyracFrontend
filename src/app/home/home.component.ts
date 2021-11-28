import { Component, OnInit } from '@angular/core';
import { Contact } from '../../contact';
import {ConnectService} from '../services/connect.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name !: String;
  email !: String;
  subject !: String;
  message !: String;
  url !: any

  constructor(private connectService: ConnectService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (!this.name){
      alert('Please Add a name')
      return;
    }
    if (!this.email){
      alert('Please Add a email')
      return;
    }
    if (!this.subject){
      alert('Please Add a subject')
      return;
    }
    if (!this.message){
      alert('Please Add a message')
      return;
    }
    const newContatcMessage: Contact={
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message,
    }
    this.connectService.addContactMessage(newContatcMessage).subscribe()
    this.message = "";
    this.name = "";
  }

}

