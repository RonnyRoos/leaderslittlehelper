import { TestBed } from '@angular/core/testing';

import { HabitsFirestoreService } from './habits-firestore.service';

describe('HabitsFirestoreService', () => {
  let service: HabitsFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitsFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
