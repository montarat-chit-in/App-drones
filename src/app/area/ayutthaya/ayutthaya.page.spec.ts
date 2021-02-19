import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AyutthayaPage } from './ayutthaya.page';

describe('AyutthayaPage', () => {
  let component: AyutthayaPage;
  let fixture: ComponentFixture<AyutthayaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyutthayaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AyutthayaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
