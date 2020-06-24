import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetubePlayerComponent } from './metube-player.component';

describe('MetubePlayerComponent', () => {
  let component: MetubePlayerComponent;
  let fixture: ComponentFixture<MetubePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetubePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetubePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
