import { Component } from '@angular/core';

import { Job } from '../../interfaces/job-interface/job';
import { Title } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { JobServiceService } from '../../services/service-job/job-service.service';

@Component({
  selector: 'app-available-jobs',
  templateUrl: './available-jobs.component.html',
  styleUrl: './available-jobs.component.css'
})
export class AvailableJobsComponent {

  faBookmark = faBookmark
  constructor(public JobServices:JobServiceService, private title:Title) {
    this.title.setTitle("Available Jobs")
  }

  ngOnInit() : void {

  }
  toggleSave(index: number) {
    this.JobServices.toggleSave(index)
  }
}
