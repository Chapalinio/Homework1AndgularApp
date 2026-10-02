import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookDescription } from './book-description/book-description';
import { FavouriteAnimal } from './favourite-animal/favourite-animal';
import { Recipe } from './recipe/recipe';

@Component({
  imports: [BookDescription, FavouriteAnimal, Recipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('homework1AngularApp');
}
