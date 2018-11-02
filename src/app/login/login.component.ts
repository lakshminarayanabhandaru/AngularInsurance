import {ComponentCommunicationService } from './../component-communication.service';
import {Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component( {
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
errorMessage: string;
formConfig: any = [
  {type: 'text', name: 'userName', label: 'User Name', constraint: Validators.required},
  {type: 'password', name: 'password', label: 'Password', constraint: Validators.required}
];

constructor(private service: ComponentCommunicationService, private builder: FormBuilder,
  private router: Router, private activatedRoute: ActivatedRoute) {
    this.loginForm = this.builder.group( {});
}

ngOnInit() {
  this.activatedRoute.params.subscribe(param=>{
    this.errorMessage = param['msg'];
  });
  this.formConfig.forEach(element =>  {
    this.loginForm.addControl(element.name, new FormControl('',  {validators: element.constraint}));
  });
}

validate() {
  console.log(this.loginForm);
  const uname = this.loginForm.controls.userName.value;
  const pwd = this.loginForm.controls.password.value;
  if (uname === 'india' && pwd === 'india') {
    sessionStorage.setItem('logged', 'true');
    this.router.navigate(['products']);
  }else{
    this.errorMessage = 'Invalid Username or password - Try again!'
  }
  this.service.changeMessage('logged');
}

}
