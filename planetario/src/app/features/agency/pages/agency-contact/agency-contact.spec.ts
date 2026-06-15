import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyContact } from './agency-contact';

describe('AgencyContact', () => {
  let component: AgencyContact;
  let fixture: ComponentFixture<AgencyContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyContact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
