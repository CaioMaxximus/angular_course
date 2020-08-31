import { User } from './User';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { throwError, EmptyError } from 'rxjs'
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {


  URLpaht = "http://localhost:3002"
  

  constructor(private httpClient: HttpClient) { 

  }

  ngOnInit() {

  }

  showMessage(message: string): void {
    console.log('login')
  }

  verifyUser(): Observable<User> {

    const id = localStorage.getItem('id');
    return this.httpClient.get<User>(`${this.URLpaht}/users/${id}`)

  }

  login( user: User) : Observable<User[]>{
    
    return this.httpClient.get<User[]>(`${this.URLpaht}/users/?nick=${user.nick}`)

  }


}
