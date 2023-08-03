import { TestBed } from '@angular/core/testing';

import { ToDoFetchService } from './to-do-fetch.service';

describe('ToDoFetchService', () => {
  let service: ToDoFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
