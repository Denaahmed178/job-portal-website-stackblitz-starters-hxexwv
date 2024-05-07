import { Component } from '@angular/core';
import { ProfileService } from '../../services/service-userprofile/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user: any;
  editedUser: any;
  editMode: boolean = false;
  originalUser: any;

  constructor(private userService: ProfileService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.originalUser = { ...this.user };
    this.editedUser = { ...this.user }; // Ensure editedUser is initialized
  }

  toggleEditMode(): void {
    if (this.editMode) {
      // Save changes if in edit mode
      this.user = { ...this.editedUser };
      // Optionally, save to backend here
    }
    this.editMode = !this.editMode;
  }

  cancelEdit(): void {
    // Revert editedUser to originalUser
    this.editedUser = { ...this.originalUser };
    this.editMode = false;
  }
}
