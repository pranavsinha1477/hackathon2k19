import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  username: string;
  password: string;

  constructor(private formBuilder: FormBuilder, private router: Router) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.username = "user"
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }



  login() {

    console.log("Invalid credentials", this.username);
    // if (this.username == 'user' && this.password == 'password') {
    //   this.router.navigate(["/home"]);
    // } else {
    //  console.log("Invalid credentials");
    //  //this.notifier.notify("error", "Invalid credentials");
    // }
    this.router.navigate(["home"]);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.router.navigate;
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))


  }
}
