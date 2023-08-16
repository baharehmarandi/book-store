import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { PaginatorModule } from 'primeng/paginator';
import { RatingModule } from 'primeng/rating';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';


const importedModules = [
  InputTextModule,
  SidebarModule,
  ButtonModule,
  CarouselModule,
  TabMenuModule,
  TabViewModule,
  CardModule,
  ImageModule,
  PaginatorModule,
  RatingModule,
  AccordionModule,
  DividerModule
]


@NgModule({
  declarations: [],
  imports: [
    ...importedModules,
    CommonModule
  ],
  exports: importedModules
})
export class PrimeNgModule { }
