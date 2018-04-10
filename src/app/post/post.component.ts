import { Component, OnInit } from '@angular/core';
import { Post } from './../models/post-model';
import { PostService } from '../services/post-service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) { }
 
  ngOnInit() {
    this.getPosts()
  }

  like(post: Post) {
    if(post.curtido == true){
      return;
    }
    else {
      this.postService.addLike(post)
        .subscribe((data) => {console.log(data)})
    }
  }

  getPosts(){
    this.posts = []
    console.log(this.posts + "oiiii")
    this.postService.getPosts()
      .subscribe((data) => {this.posts = data}, 
        (error) => console.log(error));
  }

  excluir(post: Post){
    this.postService.excluirPost(post)
      .subscribe((data) => {console.log(post); 
        this.getPosts()})
  }

  editar(post: Post) {
    post.modo_edit = true;
  }

  concluir(post: Post){
    this.postService.editarPost(post)
      .subscribe((data) => {console.log("editado");
        this.getPosts()})
  }

  cancelar(post: Post){
    post.modo_edit = false;
  }

}
