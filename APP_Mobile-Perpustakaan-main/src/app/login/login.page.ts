import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public User: any = [];

  @ViewChild('username') username!: ElementRef;
  @ViewChild('password') password!: ElementRef;

  constructor(public router: Router, public nav: NavController) { }



  async getLogin() {

    try {

      var res;

      const username = this.username.nativeElement.value;
      const password = this.password.nativeElement.value;

      console.log(username);
      console.log(password);

      const apiURL = 'http://localhost:1231/login/user/' + username + '/' + password;

      console.log(apiURL);

      let response = await axios.get(apiURL);

      res = response.data;

      console.log(typeof (res));
      console.log(res);

      if (res !== null) {
        this.User = res;
        this.router.navigateByUrl("/home");
        console.log("Login Berhasil");
        this.username.nativeElement.value = '';
        this.password.nativeElement.value = '';
        this.nav.navigateForward('home', { state: res });
      } else {
        console.log("Login Gagal");
      }

    } catch (error) {
      if (typeof error === 'string') {
        console.error(error);
      } else {
        console.error((error as Error).message);
      }
    }
  }
  ngOnInit() {
  }
  login() {
    this.getLogin();
  }
  daftar() {
    this.router.navigateByUrl('daftar')
  }
}
