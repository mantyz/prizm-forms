import { Component, Inject } from '@angular/core';
import {
  PrizmDialogService,
  PrizmOverlayInsidePlacement,
} from '@prizm-ui/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public positionVariants: PrizmOverlayInsidePlacement[] = Object.values(
    PrizmOverlayInsidePlacement
  );
  public position: PrizmOverlayInsidePlacement = this.positionVariants[1];
  public backdrop = false;

  constructor(
    @Inject(PrizmDialogService)
    private readonly dialogService: PrizmDialogService
  ) {}

  ngOnInit() {}

  public show(templ: any): void {
    this.dialogService
      .open(templ, {
        closeable: true,
        header: 'Header',
        width: 500,
        closeWord: 'Продолжить',
        position: this.position,
        backdrop: this.backdrop,
        size: 'm',
      })
      .subscribe();
  }
}
