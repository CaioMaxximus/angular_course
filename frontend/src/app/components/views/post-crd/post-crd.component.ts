import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { UserService } from './../../user/user.service';
import { Post } from './../../post/Post';
import { PostService } from './../../post/post.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router'



@Component({
  selector: 'app-post-crd',
  templateUrl: './post-crd.component.html',
  styleUrls: ['./post-crd.component.css']
})

export class PostCrdComponent implements OnInit {

  constructor(private postServc: PostService,
    private userServic: UserService,
    private router: Router,
  ) {
    this.navigateLogin = this.navigateLogin.bind(this)

  }

  posts: Post[]
  myPost = ''
  localNick = localStorage.getItem('nick')

  ngOnInit(): void {

    this.userServic.verifyUser().pipe(
      catchError(this.navigateLogin)
    ).subscribe(() =>
      this.postServc.get().subscribe((response) => {
        this.posts = response
        console.log(this.posts)
      }
      ))

  }

  navigateLogin(error) {

    console.log('login');
    this.router.navigate(['/login']);
    return throwError(error);
  }





  sendPost(): void {

    let newPost: Post = {
      authorNick: this.localNick,
      content: this.myPost
    }

    this.postServc.post(newPost).subscribe(() => {
      this.postServc.get().subscribe((response) => {
        this.posts = response
        console.log(this.posts)
        this.postServc.showMessage('Your post was sent.')
      })
      this.myPost = ''
    })
  }

  deletePost(idPost: number): void {
    this.postServc.delete(idPost).subscribe(() =>
      this.postServc.get().subscribe((response) => {
        this.posts = response
        console.log(this.posts)
      })
    )
  }

}
