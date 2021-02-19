import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DroneBenefitPage } from './drone-benefit.page';

describe('DroneBenefitPage', () => {
  let component: DroneBenefitPage;
  let fixture: ComponentFixture<DroneBenefitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneBenefitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DroneBenefitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
