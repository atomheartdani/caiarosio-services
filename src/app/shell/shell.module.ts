import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material.module';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell.component';

@NgModule({
  declarations: [HeaderComponent, ShellComponent],
  exports: [ShellComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
})
export class ShellModule {}
