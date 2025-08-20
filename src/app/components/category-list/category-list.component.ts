import { toSignal } from '@angular/core/rxjs-interop';
import { CategoryService } from './../../services/category.service';
import { Component, EventEmitter, inject, Output } from '@angular/core';

@Component({
  selector: 'app-category-list',
  imports: [],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss',
})
export class CategoryListComponent {

  @Output() categorySelected = new EventEmitter<string>();
  private categoryService = inject(CategoryService);
  public categories = toSignal(this.categoryService.getCategories());

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
}
