import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../../contact';
import { User } from '../../user';

const httpHeaders  = new HttpHeaders().set('Content-Type', 'application/json')
@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  private apiUrl = 'http://localhost:5000/api/v1'

  constructor(private http:HttpClient) { }

  addContactMessage(contact: Contact): Observable<Contact>{
    const url = this.apiUrl + '/contact'
    return this.http.post<Contact>(url, contact, {headers: httpHeaders})
  }

  registerUser(user: User){
    const url = this.apiUrl + '/auth/register'
    return this.http.post<User>(url, user, {headers: httpHeaders})
  }

  loginUser(userCredentials: any){
    const url = this.apiUrl + '/auth/login'
    return this.http.post<User>(url, userCredentials, {headers: httpHeaders})
  }

  getGoogleUrl(){
    const url = this.apiUrl + '/gauth/getUrl'
    return this.http.get(url)
  }

  googleUser(code: any){
    const url = this.apiUrl + '/gauth/authenticate'
    return this.http.post(url, code, {headers: httpHeaders})
  }
}

