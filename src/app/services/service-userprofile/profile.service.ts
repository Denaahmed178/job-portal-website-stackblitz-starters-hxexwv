import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}
  getUser() {
    return {
      name: 'John Doe',
      gender: 'Female',
      dateOfBirth: '2002-02-16', // Use YYYY-MM-DD format for <input type="date">
      phoneNumber: '123-456-7890',
      email: 'janedoe@example.com',
      address: '1234 Maple Drive, NY 10001, USA',
    };
  }
}
