import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';


import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  userForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    initialBalance: new FormControl('', [Validators.required]),
  })

  get userName(): any { return this.userForm.get('userName'); }
  get initialBalance(): any { return this.userForm.get('initialBalance'); }

  register() {

    if(!this.userForm.valid) return;

    let {
      userName,
      initialBalance,
    } = this.userForm.getRawValue();

    this.authService.register(userName, initialBalance)
    .subscribe(data => {
      this.router.navigate(['']);
    })
  }

}
