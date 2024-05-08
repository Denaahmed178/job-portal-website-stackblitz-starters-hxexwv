import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrl: './company-registration.component.css'
})
export class CompanyRegistrationComponent {
  companyname: string= '';;
  email: string= '';;
  password: string= '';;
  confirmPassword: string= '';;
  phoneNumber: string= '';;
  companytype: string= '';;
  numberofEmployees: string= '';;
  companyDescription: string= '';;
  experience: string= '';;
  showErrorMessage: boolean = false;
  constructor(private router: Router) {}
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
      this.router.navigate(['']);
    } else {
      this.showErrorMessage = true;
    }
  }

}
