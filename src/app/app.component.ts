import { Component, ChangeDetectionStrategy } from '@angular/core';

export type screen = 'screen1' | 'screen2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  title: string = 'dropdown-list';
  // isShowedList: Boolean[] = Array.from({length: 100000}).map(() => false);

  // items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  // showMarkDownEditor(event: any) {
  //   for(let i=0; i < this.items.length; i++) {
  //     if(event.currentTarget.textContent.trim() === this.items[i]) {
  //       this.isShowedList[i] = true;
  //       break
  //     }
  //   } 
  // }

  // hideMarkDownEditor(event: any) {
  //   for(let i=0; i < this.items.length; i++) {
  //     if(event.currentTarget.textContent.trim() === this.items[i]) {
  //       this.isShowedList[i] = false;
  //       break
  //     }
  //   }
  // }    

  activeScreen: screen = 'screen1';

  get showScreen1() {
    return this.activeScreen === 'screen1';
  }

  get showScreen2() {
    return this.activeScreen === 'screen2';
  }

  switchScreen(screen: screen) {
    this.activeScreen = screen;
  }
}
