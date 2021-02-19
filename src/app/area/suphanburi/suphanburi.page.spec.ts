import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuphanburiPage } from './suphanburi.page';

describe('SuphanburiPage', () => {
  let component: SuphanburiPage;
  let fixture: ComponentFixture<SuphanburiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuphanburiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuphanburiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
