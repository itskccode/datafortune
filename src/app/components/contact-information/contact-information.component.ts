import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit {
  contactInformation: FormGroup;
  stateOption: any[] = [
    { Desc: "NJ", value: "NJ" },
    { Desc: "US", value: "US" },
    { Desc: "USA", value: "USA" }
  ];

  constructor(private route: Router, private fb: FormBuilder, private registerService: RegistrationService) { }

  ngOnInit(): void {
    this.contactInformation = this.fb.group({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      confirmMail: new FormControl("", [Validators.required, Validators.email]),
      subscribe: new FormControl(false)
    }, { validators: this.mustMatchData("email", "confirmMail") });
  }

  mustMatchData(controlName: any, matchingControlName: any) {
    return (formGroup: FormGroup) => {
      let control = formGroup.controls[controlName];
      let matchingControl = formGroup.controls[matchingControlName]
      if (
        matchingControl.errors &&
        !matchingControl.errors["confirmPasswordValidator"]
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  registrationData() {
    if (this.contactInformation.valid) {
      this.registerService.registerForm(this.contactInformation.value).subscribe((data) => {
        if (data && data['id'] !== undefined && data['id'] !== "") {
          localStorage.setItem('UserToken', data['id'])
          this.route.navigateByUrl("complete");
        }
      });
    } else {
      this.contactInformation.markAllAsTouched();
    }
  }
}
