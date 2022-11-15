import { TestBed } from '@angular/core/testing';

import { Data1Service } from './data1.service';

describe('Data1Service', () => {
  let service: Data1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Data1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
