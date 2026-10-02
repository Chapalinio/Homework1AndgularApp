import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavouriteAnimal } from './favourite-animal';

describe('FavouriteAnimal', () => {
  let component: FavouriteAnimal;
  let fixture: ComponentFixture<FavouriteAnimal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteAnimal],
    }).compileComponents();

    fixture = TestBed.createComponent(FavouriteAnimal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
