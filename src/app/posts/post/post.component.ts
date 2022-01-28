import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/Model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts?:Post[];

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }


  getAllPosts(){
    this.postService.getAllPosts().subscribe({
      next:(data)=>{
        this.posts = data;
        console.log(data);
      },
      error:(e) => console.error(e)
    });  
  }
}
