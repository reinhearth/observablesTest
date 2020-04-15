import { TestBed } from '@angular/core/testing';

import { TestObservablesService } from './test-observables.service';

describe('TestObservablesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestObservablesService = TestBed.get(TestObservablesService);
    expect(service).toBeTruthy();
  });
});
