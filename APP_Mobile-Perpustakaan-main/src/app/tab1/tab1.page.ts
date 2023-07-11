import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AlertController, LoadingController, ViewWillEnter } from '@ionic/angular';
import { ApiService } from "../api.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@capacitor-community/http';
import axios from 'axios';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements ViewWillEnter {
  public Buku: any = [];

  constructor(
    public router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.getBuku()
  }
  ionViewWillEnter() {
    this.getBuku()
  }

  async getBuku() {
    try {
      this._apiService.getBuku().subscribe(
        (res: any) => {
          this.Buku = res;
        },
        (error: any) => {
          console.log('gagal', error);
          this.alertController
            .create({
              header: 'Notifikasi',
              message: 'Gagal memuat data Buku',
              buttons: ['OK'],
            })
            .then((res) => {
              res.present();
            });
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit() {
    console.log('cek fungsi halaman event init jalan');
  }
}


 