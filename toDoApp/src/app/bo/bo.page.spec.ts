import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoPage } from './bo.page';

describe('BoPage', () => {
  let component: BoPage;
  let fixture: ComponentFixture<BoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
