import { DOCUMENT } from '@angular/common';
import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  EmbeddedViewRef,
  ComponentRef,
  Injector,
  Type,
  TemplateRef,
  ViewRef,
  Inject,
  EventEmitter,
} from '@angular/core';
import { Platform } from '@ionic/angular';
import { Subject, Subscription } from 'rxjs';
import { BottomSheetContainerComponent } from '../container/bottom-sheet-container.component';
import { BottomSheetConfig } from './bottom-sheet.config';

export class BottomSheetRef<T = any> {
  id: number;
  content?: T | null;
  onClose: EventEmitter<any>;
  close: (data?: any) => void = Function;
}

@Injectable({ providedIn: 'root' })
export class BottomSheetService {
  lastId = 0;
  private componentRef: ComponentRef<BottomSheetContainerComponent>;
  backButtonSubscription: Subscription;

  private lastDismissReason: any = null;

  onClose: EventEmitter<any> = new EventEmitter();

  constructor(
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  show<T = any>(config: BottomSheetConfig<T>): BottomSheetRef {
    const mConfig = Object.assign({}, config);

    return this._showPopup(mConfig);
  }

  close(data?: any) {
    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
    this.onClose.emit(data || null);
  }

  private _showPopup(config: BottomSheetConfig): BottomSheetRef {
    const componentFactory = this.cfr.resolveComponentFactory(
      BottomSheetContainerComponent
    );

    const contentRef = this._getContentRef(config.content, config.data || null);
    const componentRef = componentFactory.create(
      this.injector,
      contentRef.nodes
    );
    // componentRef.instance.content = config.content;
    componentRef.instance.service = this;
    componentRef.instance.height = config.height ? config.height : 300;

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.componentRef = componentRef;

    const ref = new BottomSheetRef();
    ref.close = (data?: any) => this.close(data);
    ref.id = config?.id || new Date().getUTCMilliseconds();
    ref.content = contentRef.componentRef;
    ref.onClose = new EventEmitter();
    this.copyEvent(this.onClose, ref.onClose);

    return ref;
  }

  private copyEvent(from: EventEmitter<any>, to: EventEmitter<any>) {
    from.subscribe((data: any) => {
      to.emit(this.lastDismissReason || data);
    });
  }

  private _getContentRef(content: string | TemplateRef<any> | any, data?: any) {
    if (!content) {
      return null;
    }

    if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView(data);
      this.appRef.attachView(viewRef);
      return new ContentRef([viewRef.rootNodes], viewRef);
    }

    if (typeof content === 'function') {
      const contentCmptFactory = this.cfr.resolveComponentFactory(content);
      const componentRef = contentCmptFactory.create(this.injector);
      Object.assign(componentRef.instance, data);
      this.appRef.attachView(componentRef.hostView);
      return new ContentRef(
        [[componentRef.location.nativeElement]],
        componentRef.hostView,
        componentRef
      );
    }
  }
}

export class ContentRef {
  nodes: any[];
  viewRef?: ViewRef;
  componentRef?: ComponentRef<any>;

  constructor(
    nodes: any[],
    viewRef?: ViewRef,
    componentRef?: ComponentRef<any>
  ) {
    this.nodes = nodes;
    this.viewRef = viewRef;
    this.componentRef = componentRef;
  }
}
