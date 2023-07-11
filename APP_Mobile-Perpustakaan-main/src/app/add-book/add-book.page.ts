import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
})
export class AddBookPage implements OnInit {

  selectedBook = {
    judul_buku: '',
    id_pengarang: '',
    tahun_terbit: '',
    // Tambahkan properti lain yang sesuai
  };

  constructor(private http: HttpClient) { }

  addBook() {
    const bookData = {
      judul_buku: this.selectedBook.judul_buku,
      id_pengarang: this.selectedBook.id_pengarang,
      tahun_terbit: this.selectedBook.tahun_terbit,
      // Lanjutkan dengan properti lain yang sesuai
    };

    this.http.post('http://localhost:1231/buku/add', bookData).subscribe(
      (response) => {
        console.log('Buku berhasil ditambahkan', response);
        // Tambahkan logika atau tindakan lain yang diperlukan setelah berhasil menambahkan buku
      },
      (error) => {
        console.error('Terjadi kesalahan saat menambahkan buku', error);
        // Tambahkan penanganan kesalahan atau tindakan lain yang diperlukan jika gagal menambahkan buku
      }
    );
  }

  ngOnInit() {
  }

}
