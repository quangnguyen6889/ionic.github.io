import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllFunctionPage } from './all-function.page';

describe('AllFunctionPage', () => {
  let component: AllFunctionPage;
  let fixture: ComponentFixture<AllFunctionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFunctionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllFunctionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
