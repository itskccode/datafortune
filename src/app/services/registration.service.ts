import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registerForm(value: any) {
    return this.http.post(`https://codingexercise.speakcore.com/api/registrations?key=${value.email}`, value);
  }
}
