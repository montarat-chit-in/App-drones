import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NakhonpathomPage } from './nakhonpathom.page';

describe('NakhonpathomPage', () => {
  let component: NakhonpathomPage;
  let fixture: ComponentFixture<NakhonpathomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NakhonpathomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NakhonpathomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
