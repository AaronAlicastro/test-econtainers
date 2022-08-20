import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksViewComponent } from './blocks-view.component';

describe('BlocksViewComponent', () => {
  let component: BlocksViewComponent;
  let fixture: ComponentFixture<BlocksViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocksViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
