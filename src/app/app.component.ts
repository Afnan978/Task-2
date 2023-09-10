import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';

  newToDoItem: string = '';
  toDoItems: { text: string; checked: boolean }[] = [];

  addToDoItem() {
    if (this.isValidToDoItem(this.newToDoItem)) {
      this.toDoItems.push({ text: this.newToDoItem, checked: false });
      this.saveToDoItems();
      this.newToDoItem = '';
    } else {
      alert('Please enter a valid item (4-200 alphanumeric characters).');
    }
  }

  deleteToDoItem(index: number) {
    this.toDoItems.splice(index, 1);
    this.saveToDoItems();
  }

  saveToDoItems() {
    localStorage.setItem('todoItems', JSON.stringify(this.toDoItems));
  }

  // ngOnInit() {
  //   const storedItems = JSON.parse(localStorage.getItem('todoItems')) || [];
  //   this.toDoItems = storedItems;
  // }

  isValidToDoItem(text: string): boolean {
    return text.length >= 4 && text.length <= 200 && /^[a-zA-Z0-9\s]+$/.test(text);
  }

}