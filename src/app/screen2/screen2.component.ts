import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Screen2Component {
  isShowedList: Boolean[] = Array.from({length: 100000}).map(() => true);
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  showMarkDownEditor(event: any) {
    for(let i=0; i < this.items.length; i++) {
      if(event.currentTarget.textContent.trim() === this.items[i]) {
        this.isShowedList[i] = true;
        break
      }
    } 
  }

  hideMarkDownEditor(event: any) {
    for(let i=0; i < this.items.length; i++) {
      if(event.currentTarget.textContent.trim() === this.items[i]) {
        this.isShowedList[i] = false;
        break
      }
    }
  }  
}
