import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { GlobalLoaderComponent } from 'src/app/shared/components/global-loader/global-loader.component';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogModule } from '@angular/cdk/dialog';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, GlobalLoaderComponent],
  imports: [CommonModule, RouterModule, DragDropModule, DialogModule],
  exports: [FooterComponent, HeaderComponent, GlobalLoaderComponent, DragDropModule, DialogModule]
})
export class SharedModule {}
