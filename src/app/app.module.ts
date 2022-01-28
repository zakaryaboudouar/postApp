import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostComponent } from './posts/post/post.component';
import {NgxPaginationModule} from 'ngx-pagination';  
@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
