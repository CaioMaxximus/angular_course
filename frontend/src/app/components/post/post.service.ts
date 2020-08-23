import { Post } from './Post';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService implements OnInit{
  

  route = "http://localhost:3002"
  
  constructor(private httpClient : HttpClient) { }

  ngOnInit(){
  }

  get() :  Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.route}/posts`)

  }

  delete(id: number) : Observable<Post>{
    return this.httpClient.delete<Post>(`${this.route}/posts/${id}`)

  }
  post(post: Post): Observable<Post>{

    return this.httpClient.post<Post>(`${this.route}/posts`,post)

  }
}
