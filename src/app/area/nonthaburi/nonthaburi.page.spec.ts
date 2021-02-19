import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NonthaburiPage } from './nonthaburi.page';

describe('NonthaburiPage', () => {
  let component: NonthaburiPage;
  let fixture: ComponentFixture<NonthaburiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonthaburiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NonthaburiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
