import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { BottomSheetService } from '../service/bottom-sheet.service';

@Component({
  selector: 'app-bottom-sheet-container',
  templateUrl: 'bottom-sheet-container.component.html',
  styleUrls: ['bottom-sheet-container.component.scss'],
})
export class BottomSheetContainerComponent implements OnInit, OnDestroy {
  isAnimated: boolean;
  isShown = false;
  service: BottomSheetService;
  height = 300;
  customCss: string;
  backButtonSubscription: Subscription;

  @ViewChild('content') contentEl: ElementRef<HTMLDivElement>;

  constructor(
    protected el: ElementRef,
    private renderer: Renderer2,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
    setTimeout(() => {
      this.isShown = true;
      this.renderer.addClass(this.contentEl.nativeElement, 'active');
    }, 0);

    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(
      999,
      () => {
        this.close();
      }
    );
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  close() {
    this.service.close();
  }
}
