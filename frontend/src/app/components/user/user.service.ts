import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{


  route = "http://localhost:3002"

  constructor(private httpClient :HttpClient) { }

  ngOnInit(){

  }

  verifyUser() : void{

    let id : string = localStorage.getItem('id')

    // if(!id){

    //     return false
    // }else{

      this.httpClient.get(`${this.route}/users/${id}`).subscribe((response)=>{

        console.log(response)
      })

    // }

  }
}
