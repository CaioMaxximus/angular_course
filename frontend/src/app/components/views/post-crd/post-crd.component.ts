import { Post } from './../../post/Post';
import { PostService } from './../../post/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-crd',
  templateUrl: './post-crd.component.html',
  styleUrls: ['./post-crd.component.css']
})
export class PostCrdComponent implements OnInit {

  constructor(private postServc : PostService) { }

  posts : Post[]

  ngOnInit(): void {
      this.postServc.getPosts().subscribe((response) => {
        this.posts = response
        console.log(this.posts)
      })
  }

}
