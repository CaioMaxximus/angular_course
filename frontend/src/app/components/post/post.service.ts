import { Post } from './Post';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class PostService implements OnInit {


  route = "http://localhost:3002"

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }



  get(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.route}/posts`)

  }

  delete(id: number): Observable<Post> {
    return this.httpClient.delete<Post>(`${this.route}/posts/${id}`)

  }
  post(post: Post): Observable<Post> {

    return this.httpClient.post<Post>(`${this.route}/posts`, post)

  }

  showMessage(message: string) : void {

    this.snackBar.open(message, '', {
      duration: 3500,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })

  }
}
