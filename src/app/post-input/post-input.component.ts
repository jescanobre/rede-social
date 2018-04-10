import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post-service';
import { Post } from './../models/post-model';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css']
})

export class PostInputComponent implements OnInit {
  id: Number;
  nomeInput: String= "";
  textoInput: String= "";  


  constructor(private postService: PostService) { }

  ngOnInit() {
  }


  onSubmit(event) {
    event.preventDefault();
    this.postService.addPost(new Post(this.id, this.nomeInput, this.textoInput, 0, false, false))
      .subscribe((data) => {console.log(data);})
  }
}
