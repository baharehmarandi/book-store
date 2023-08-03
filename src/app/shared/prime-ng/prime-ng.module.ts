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


const importedModules = [
  InputTextModule,
  SidebarModule,
  ButtonModule,
  CarouselModule,
  TabMenuModule,
  TabViewModule,
  CardModule,
  ImageModule
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
