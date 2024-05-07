import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';
import { SavedJobsComponent } from './components/saved-jobs/saved-jobs.component';
import { ApplicationReviewComponent } from './components/application-review/application-review.component';
import { LoginComponent } from './components/login/login.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { JobPostComponent } from './components/job-post/job-post.component';
import { ManagePostComponent } from './components/manage-post/manage-post.component';
import { PostingService } from './services/service-posting/posting.service';
import { CompanyRegistrationComponent } from './components/company-registration/company-registration.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { AvailableJobsComponent } from './components/available-jobs/available-jobs.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { ConfirmationPageComponent } from './components/confirmation-page/confirmation-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CompanyNavbarComponent } from './components/company-navbar/company-navbar.component';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { HomeApplicantComponent } from './components/home-applicant/home-applicant.component';

@NgModule({
  declarations: [
    AppComponent,
    UserNavbarComponent,
    SavedJobsComponent,
    ApplicationReviewComponent,
    LoginComponent,
    CompanyProfileComponent,
    EditPostComponent,
    JobPostComponent,
    ManagePostComponent,
    CompanyRegistrationComponent,
    UserRegistrationComponent,
    AvailableJobsComponent,
    JobDetailsComponent,
    JobFormComponent,
    ConfirmationPageComponent,
    UserProfileComponent,
    CompanyNavbarComponent,
    CompanyDashboardComponent,
    WelcomePageComponent,
    HomeApplicantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [provideClientHydration(), PostingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
