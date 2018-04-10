import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Post } from './../models/post-model'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 

@Injectable()
export class PostService {
    url: string = "http://rest.learncode.academy/api/mariajesca/posts";
    
    constructor(private http: Http) { }

    posts: Post[];
    
    getPosts() {
        return this.http.get(this.url)
            .map((response: Response) => {
                this.posts = [];
                for(let p of response.json()){
                    this.posts.push (new Post(p.id, p.nome_pessoa, p.texto, p.qtd_likes, p.curtido, p.modo_edit))
                }

                return this.posts;
            })
            .catch((error: Response) => Observable.throw(error))
    };

    addPost(post: Post) {
        return this.http.post(this.url, post)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error))
    } 

    excluirPost(post: Post){
        console.log("passei aqui");
        return this.http.delete(this.url + "/" + post.id)
            .catch((error: Response) => Observable.throw(error));
        
    }

    editarPost(post: Post){
        post.modo_edit = false; 
        return this.http.put(this.url + "/" + post.id, post)
            .catch((error: Response) => Observable.throw(error));
    }     
    
    addLike(post: Post){
        post.curtido = true;
        post.qtd_likes ++;

        return this.http.put(this.url + "/" + post.id, post) 
            .catch((error: Response) => Observable.throw(error));
    }
}