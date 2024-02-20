import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@app/material.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [ConfirmDialogComponent, LoaderComponent],
  exports: [ConfirmDialogComponent, LoaderComponent],
  imports: [CommonModule, MaterialModule],
})
export class SharedModule {}
