import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogInNewPage } from './log-in-new.page';

describe('LogInNewPage', () => {
  let component: LogInNewPage;
  let fixture: ComponentFixture<LogInNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInNewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogInNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
