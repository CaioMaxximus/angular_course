import { UserService } from './../../user/user.service';
import { User } from './../../user/User';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData: User ={
    nick : '',
    password :''
  };

  localNick : string = ''

  constructor(private userServc : UserService,
    private router : Router) { }

  ngOnInit(): void {
  }


  loginUser(){
    this.userServc.login(this.userData).subscribe(response  => {

        console.log(response);
        if(response.length === 0){
            console.log("login invalido")
        }
        else{
          localStorage.setItem('nick', response[0].nick) 
          localStorage.setItem('id',stringify(response[0].id)) 

          this.localNick = response[0].nick;
          this.navigateToPost()

        }
    }
  )
  }

  navigateToPost(){
    this.router.navigate(['posts']); 
   }


}
