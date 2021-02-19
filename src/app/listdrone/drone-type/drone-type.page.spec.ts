import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DroneTypePage } from './drone-type.page';

describe('DroneTypePage', () => {
  let component: DroneTypePage;
  let fixture: ComponentFixture<DroneTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DroneTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
