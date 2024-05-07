import { Component, OnInit } from '@angular/core';
import { PostingService } from '../../services/service-posting/posting.service';

@Component({
  selector: 'app-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrl: './manage-post.component.css'
})
export class ManagePostComponent  implements OnInit{
    constructor(public jobserve: PostingService){

    }
    ngOnInit(): void {
    }
    deleteJob(i:number){
      this.jobserve.deleteJob(i);
    }
}
