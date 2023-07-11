import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {
  buku: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.fetchBookDetails(id);
      }
    });
  }

  fetchBookDetails(id: string) {
    this.http.get(`http://localhost:1231/buku/${id}`).subscribe(
      (response: any) => {
        this.buku = response;
      },
      (error) => {
        console.error('Terjadi kesalahan saat mengambil detail buku', error);
        // Tambahkan penanganan kesalahan lainnya jika diperlukan
      }
    );
  }
}
