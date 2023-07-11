import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';
import axios from 'axios';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.page.html',
  styleUrls: ['./borrow-book.page.scss'],
})
export class BorrowBookPage implements OnInit {
  public Buku: any = [];

  pinjam: any;
  kembali: any;
  id: any;
  constructor(
    public router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) { this.getBuku() }

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
  async addPinjam() {
    try {
      console.log(this.pinjam + this.kembali + this.id)
      let url = this._apiService.apiURL() + '/peminjaman/add';
      Http.request({
        method: "POST",
        url: url,
        headers: { 'Content-Type': 'application/json' },
        data: {
          id_buku: this.id,
          tanggal_peminjaman: this.pinjam,
          tanggal_pengembalian: this.kembali,

        },
      }).then(($data) => {
        this.pinjam = '';
        this.kembali = '';
        this.id = '';
        this.alertController.create({
          header: "Notifikasi",
          message: "Data berhasil ditambahkan",
          buttons: ['OK'],
        }).then(res => {
          res.present();
        });
        this.router.navigateByUrl('/home');
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
  };
  borrowBooks() {
    this.addPinjam();
  }

  ngOnInit() { }
}