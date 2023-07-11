import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from "../api.service";
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.page.html',
  styleUrls: ['./daftar.page.scss'],
})
export class DaftarPage implements OnInit {
  username: any;
  password: any;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public _apiService: ApiService,
    public alertController: AlertController,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }

  async addUser() {
    try {
      console.log(this.username + this.password)
      let url = this._apiService.apiURL() + '/user/add';
      Http.request({
        method: "POST",
        url: url,
        headers: { 'Content-Type': 'application/json' },
        data: {
          username: this.username,
          password: this.password,
        },
      }).then(($data) => {
        this.username = '';
        this.password = '';
        this.alertController.create({
          header: "Notifikasi",
          message: "Data berhasil ditambahkan",
          buttons: ['OK'],
        }).then(res => {
          res.present();
        });
        this.router.navigateByUrl('/login');
      }), () => {
        this.alertController.create({
          header: "Notifikasi",
          message: "Gagal menambahkan data",
          buttons: ['OK'],
        }).then(res => {
          res.present();
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}