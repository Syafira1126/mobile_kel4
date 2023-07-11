import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorrowBookPage } from './borrow-book.page';

describe('BorrowBookPage', () => {
  let component: BorrowBookPage;
  let fixture: ComponentFixture<BorrowBookPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BorrowBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
