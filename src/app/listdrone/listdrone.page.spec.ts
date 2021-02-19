import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListdronePage } from './listdrone.page';

describe('ListdronePage', () => {
  let component: ListdronePage;
  let fixture: ComponentFixture<ListdronePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdronePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListdronePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
