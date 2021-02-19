import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PathumthaniPage } from './pathumthani.page';

describe('PathumthaniPage', () => {
  let component: PathumthaniPage;
  let fixture: ComponentFixture<PathumthaniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathumthaniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PathumthaniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
