import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { PostComponent } from './post/post.component';
import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostInputComponent } from './post-input/post-input.component';
import { PostService } from './services/post-service';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    LinhaDoTempoComponent,
    NavbarComponent,
    PostInputComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
