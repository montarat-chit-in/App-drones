import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DroneKrasetPage } from './drone-kraset.page';

describe('DroneKrasetPage', () => {
  let component: DroneKrasetPage;
  let fixture: ComponentFixture<DroneKrasetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneKrasetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DroneKrasetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
