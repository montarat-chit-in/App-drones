import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DroneTypeofkrasetPage } from './drone-typeofkraset.page';

describe('DroneTypeofkrasetPage', () => {
  let component: DroneTypeofkrasetPage;
  let fixture: ComponentFixture<DroneTypeofkrasetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneTypeofkrasetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DroneTypeofkrasetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
