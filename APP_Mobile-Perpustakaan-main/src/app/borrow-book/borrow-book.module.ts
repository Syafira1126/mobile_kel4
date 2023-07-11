import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorrowBookPageRoutingModule } from './borrow-book-routing.module';

import { BorrowBookPage } from './borrow-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorrowBookPageRoutingModule
  ],
  declarations: [BorrowBookPage]
})
export class BorrowBookPageModule {}
