// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  Pipe,
  PipeTransform,
  Injectable,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  Directive,
  Input,
  Output,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component, ElementRef, Renderer2 } from '@angular/core';
import { BottomSheetContainerComponent } from './bottom-sheet-container.component';
import { Platform } from '@ionic/angular';

@Injectable()
class MockElementRef {
  nativeElement = {};
}

@Directive({ selector: '[oneviewPermitted]' })
class OneviewPermittedDirective {
  @Input() oneviewPermitted;
}

@Pipe({ name: 'translate' })
class TranslatePipe implements PipeTransform {
  transform(value) {
    return value;
  }
}

@Pipe({ name: 'phoneNumber' })
class PhoneNumberPipe implements PipeTransform {
  transform(value) {
    return value;
  }
}

@Pipe({ name: 'safeHtml' })
class SafeHtmlPipe implements PipeTransform {
  transform(value) {
    return value;
  }
}

describe('BottomSheetContainerComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        BottomSheetContainerComponent,
        TranslatePipe,
        PhoneNumberPipe,
        SafeHtmlPipe,
        OneviewPermittedDirective,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: ElementRef, useClass: MockElementRef },
        Renderer2,
        Platform,
      ],
    })
      .overrideComponent(BottomSheetContainerComponent, {})
      .compileComponents();
    fixture = TestBed.createComponent(BottomSheetContainerComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function () {};
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    jest.useFakeTimers();

    component.renderer = component.renderer || {};
    component.renderer.setStyle = jest.fn();
    component.renderer.addClass = jest.fn();
    component.el = component.el || {};
    component.el.nativeElement = 'nativeElement';
    component.contentEl = component.contentEl || {};
    component.contentEl.nativeElement = 'nativeElement';
    component.platform = component.platform || {};
    component.platform.backButton = {
      subscribeWithPriority: function () {},
    };
    component.close = jest.fn();
    component.ngOnInit();
    expect(component.renderer.setStyle).toHaveBeenCalled();

    jest.advanceTimersByTime(0);

    expect(component.renderer.addClass).toHaveBeenCalled();
  });

  it('should run #ngOnDestroy()', async () => {
    component.backButtonSubscription = component.backButtonSubscription || {};
    component.backButtonSubscription.unsubscribe = jest.fn();
    component.ngOnDestroy();
    expect(component.backButtonSubscription.unsubscribe).toHaveBeenCalled();
  });

  it('should run #close()', async () => {
    component.service = component.service || {};
    component.service.close = jest.fn();
    component.close();
    expect(component.service.close).toHaveBeenCalled();
  });
});
