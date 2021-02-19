import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DroneLawPage } from './drone-law.page';

describe('DroneLawPage', () => {
  let component: DroneLawPage;
  let fixture: ComponentFixture<DroneLawPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroneLawPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DroneLawPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
