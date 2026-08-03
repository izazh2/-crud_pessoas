import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPessoa } from './crud-pessoa';

describe('CrudPessoa', () => {
  let component: CrudPessoa;
  let fixture: ComponentFixture<CrudPessoa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudPessoa],
    }).compileComponents();

    fixture = TestBed.createComponent(CrudPessoa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
