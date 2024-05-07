import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  username: string= '';;
  email: string= '';;
  password: string= '';;
  confirmPassword: string= '';;
  phoneNumber: string= '';;
  workExperience: string= '';;
  skills: string= '';;
  education: string= '';;
  showErrorMessage: boolean = false;

  checkPasswordStrength() {
    if (this.password.length < 5) {
      return 'Weak';
    } else if (this.password.length < 8) {
      return 'Medium';
    } else {
      return 'Strong';
    }
  }

  isWeakPassword() {
    return this.checkPasswordStrength() === 'Weak';
  }

  isMediumPassword() {
    return this.checkPasswordStrength() === 'Medium';
  }

  isStrongPassword() {
    return this.checkPasswordStrength() === 'Strong';
  }

  getPasswordStrengthMessage() {
    const strength = this.checkPasswordStrength();
    if (strength === 'Weak') {
      return 'Password strength: Weak';
    } else if (strength === 'Medium') {
      return 'Password strength: Medium';
    } else {
      return 'Password strength: Strong';
    }
  }
  clearErrorMessage() {
    this.showErrorMessage = false;
  }
  hasUpperCaseLetter(password: string): boolean {
    return /[A-Z]/.test(password);
  }
  
  showUpperCaseMessage() {
    return this.password.length > 0 && !this.hasUpperCaseLetter(this.password);
  }
  
  
  submitForm() {
    if (this.password === this.confirmPassword) {
      // Passwords match, perform form submission or navigate to the next page
    } else {
      this.showErrorMessage = true;
    }
  }
}
