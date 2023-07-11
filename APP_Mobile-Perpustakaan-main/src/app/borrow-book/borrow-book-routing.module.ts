import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorrowBookPage } from './borrow-book.page';

const routes: Routes = [
  {
    path: '',
    component: BorrowBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorrowBookPageRoutingModule {}
