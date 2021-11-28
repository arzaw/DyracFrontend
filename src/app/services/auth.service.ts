import { Injectable } from '@angular/core';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  setSession(userData: any){
    const expiresAt = moment().add(userData.expiresIn, 'days')

    localStorage.setItem('id_token', userData.token)
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()))
    console.log(userData.expiresIn)
  }

  logout(){
    localStorage.removeItem("id_token")
    localStorage.removeItem("expires_at")
  }

  public isLoggedIn(){
    return this.checkExpiration()
  }

  isLoggedOut(){
    return !this.isLoggedIn()
  }

  checkExpiration(){
    const expiration: string| null = localStorage.getItem("expires_at")
    if (expiration===null){
      return false
    }
    const expiresAt = JSON.parse(expiration||'{}')
    return moment().isBefore(moment(expiresAt))
  }
}

