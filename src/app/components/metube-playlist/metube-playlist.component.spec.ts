import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetubePlaylistComponent } from './metube-playlist.component';

describe('MetubePlaylistComponent', () => {
  let component: MetubePlaylistComponent;
  let fixture: ComponentFixture<MetubePlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetubePlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetubePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
