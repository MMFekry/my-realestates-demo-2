import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit { 
  loading : boolean | any;
//  username! : string;
//  password! : string;
 form: FormGroup= new FormGroup({});
  constructor(private router : Router, private fb: FormBuilder) {
    this.CreateForm();
    this.getInfo();
   }

   getInfo()  {
    this.loading = true;
    setTimeout(() => {
      this.loading = false
    },3000)
  }

  ngOnInit() {
  }

  logIn(){
    this.router.navigate(['/realestates'])
  }
  CreateForm(){
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  OnSubmit(){
    console.log(this.form.value);
    this.router.navigate(['/todo-list'])

  }
  OnGoMovie(){
    this.router.navigate(['/realestates'])

  }
  OnGoDesign(){
    this.router.navigate(['/tabs/pages/eservices'])

  }
}
