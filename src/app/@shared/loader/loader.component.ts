import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() isLoading: boolean | null = false;
  @Input() size = 1;
  @Input() message: string | undefined;
}
