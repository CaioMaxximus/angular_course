import { Post } from './../../post/Post';
import { PostService } from './../../post/post.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-post-crd',
  templateUrl: './post-crd.component.html',
  styleUrls: ['./post-crd.component.css']
})
export class PostCrdComponent implements OnInit {

  constructor(private postServc: PostService) { }

  posts: Post[]
  myPost = ''
  myId = localStorage.getItem('nick')
 
  ngOnInit(): void {
    this.postServc.get().subscribe((response) => {
      this.posts = response
      console.log(this.posts)
    })
  }

  sendPost(): void {

    let newPost: Post  ={
      authorNick: this.myId,
      content : this.myPost
    }
  
    this.postServc.post(newPost).subscribe(()=>{
      this.postServc.get().subscribe((response) => {
        this.posts = response
        console.log(this.posts)
    })
    this.myPost = ''
    })
  }

  deletePost(idPost: number): void {
    this.postServc.delete(idPost).subscribe(()=>
        this.postServc.get().subscribe((response) => {
        this.posts = response
        console.log(this.posts)
    })
    )
  }

}
