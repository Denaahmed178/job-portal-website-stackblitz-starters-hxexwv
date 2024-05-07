import { Injectable } from '@angular/core';
import { Job } from '../../interfaces/job-interface/job';

@Injectable({
  providedIn: 'root'
})
export class PostingService {
     
   jobs : Job[] =[]

  constructor() { }

  submitJob(jobtitle:any,companyname:any,jobdescription:any,jobrequirement:any,jobsalary:any,jobdeadline:any){
    this.jobs.push({
      job_title:jobtitle,
      company_name:companyname,
      job_description:jobdescription,
      job_requirement:jobrequirement,
      salary:jobsalary,
      job_deadline:jobdeadline
    })
  }

  deleteJob(i : number){
    this.jobs.splice(i,1);
  }
  Editpost(id:any,item:any){
    this.jobs[id] = item;
  }
}
