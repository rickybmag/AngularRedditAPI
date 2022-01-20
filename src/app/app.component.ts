import { Component } from '@angular/core';
import { Convert, Post } from './Reddit';
import { ResultService } from './result.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ResultService]
})

export class AppComponent {
  title = 'aww';
  post?: Post;

  constructor(private redditAPI: ResultService) { }

  GetPost() {
    let title: string = (<HTMLInputElement>document.getElementById("Title")).value;
    this.redditAPI.SearchRedditByPost(title).subscribe(
      (result: any) => {
        console.log(result);
        let json: string = Convert.postToJson(result)
        let post: Post = Convert.toPost(json)
        console.log(post)
        this.post = post;
      }
    );
  }
}

//   SearchPost() {
//     let search: string = (<HTMLInputElement>document.getElementById("search")).value;
//     console.log(search);
//     this.redditAPI.SearchRedditPost(search).subscribe(
//       (result: any) => {
//         console.log(result);
//         let json: string = Convert.postToJson(result)
//         let post: Post = Convert.toPost(json)
//         console.log(post)
//         this.post = post;
//       }
//     );
//   }
// }
