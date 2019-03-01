import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { TrangChuModule } from './home-layout/trang-chu/trang-chu.module';
import { TrangChiTietModule } from './home-layout/trang-chi-tiet/trang-chi-tiet.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeLayoutComponent
  ],
  imports: [
    CommonModule, TrangChuModule, TrangChiTietModule, RouterModule
  ],
  exports: [
    HomeLayoutComponent
  ]
})
export class HomeModule { }
