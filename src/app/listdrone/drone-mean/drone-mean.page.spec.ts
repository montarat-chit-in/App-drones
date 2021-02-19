import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DroneMeanPage } from './drone-mean.page';

describe('DroneMeanPage', () => {
  let component: DroneMeanPage;
  let fixture: ComponentFixture<DroneMeanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneMeanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DroneMeanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
