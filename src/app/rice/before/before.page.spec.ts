import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeforePage } from './before.page';

describe('BeforePage', () => {
  let component: BeforePage;
  let fixture: ComponentFixture<BeforePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeforePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
