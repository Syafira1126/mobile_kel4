import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';
import axios from 'axios';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements ViewWillEnter {
  public Buku: any = [];

  constructor(
    public router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) { }
  viewBookDetails(book: string) {
    console.log("Detail buku: " + book);
  }
  ionViewWillEnter() {
    console.log("Jika Selesai Loading");
    this.getBuku();
  }


  async getBuku() {
    this._apiService.getBuku().subscribe(
      (res: any) => {
        this.Buku = res;
        console.log(this.Buku)
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

  }

  ngOnInit() { }
}

