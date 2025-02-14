import { TestBed } from '@angular/core/testing';

import { DemoService } from './demo.service';
import { provideOurFirebaseApp } from './firebase-app.provider';
import { provideEmulatedFirestore } from './firestore.emulator.spec';

describe('DemoService', (): void => {
  let service: DemoService;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [ provideOurFirebaseApp(), provideEmulatedFirestore() ],
    });
    service = TestBed.inject(DemoService);
  });

  it('should create a new document', async (): Promise<void> => {
    const id = await service.create('Demo Document');
    expect(id).toBeTruthy();
  }, 500);
});
