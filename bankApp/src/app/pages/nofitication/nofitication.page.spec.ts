import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NofiticationPage } from './nofitication.page';

describe('NofiticationPage', () => {
  let component: NofiticationPage;
  let fixture: ComponentFixture<NofiticationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NofiticationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NofiticationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
