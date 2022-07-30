import { Component, OnInit } from '@angular/core';
import { variationPlacements } from '@popperjs/core/lib';
import { PostalserviceService } from '../../SERVICE/postalservice.service';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
@Component({
  selector: 'app-postal',
  templateUrl: './postal.component.html',
  styleUrls: ['./postal.component.css'],
})
export class PostalComponent implements OnInit {
  posts: any;

  constructor(private post: PostalserviceService) {}

  ngOnInit() {
    // this.post.getDataById(this.inputText).subscribe((response) => {
    //   alert(this.inputText);
    //   console.log(this.inputText);
    //   this.posts = response;
    //   console.log(this.posts);
    //   var g = response[0]['PostOffice'];
    //   console.log(g);
    //   this.posts = g;
    // });
  }
  getDataById(input: any) {
    this.post.getDataById(input).subscribe((res) => {
      this.posts = res;
      console.log(this.posts);
      var g = res[0]['PostOffice'];
      console.log(g);
      this.posts = g;
    });
  }
}
