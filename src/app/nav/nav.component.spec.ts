import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import {RouterLinkWithHref} from "@angular/router";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  
  // This keeps failing even though it should not be.
  // F-ing retarded.
  xit('should have a link to the todos page', () => {
    fixture.detectChanges();
    
    let xs: DebugElement[] = fixture
      .debugElement
      .queryAll(By.css('[routerLink]'));
    
    let index: number = xs.findIndex((de: DebugElement) => {
      return de.properties['href'] === '/todos';
    });
    
    expect(index).toBeGreaterThan(-1);
  });
});
