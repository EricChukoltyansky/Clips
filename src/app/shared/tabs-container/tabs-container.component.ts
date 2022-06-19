import { Component, OnInit, ContentChildren } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements OnInit {
  @ContentChildren(TabComponent) tabs = {};

  constructor() {}

  ngOnInit(): void {
    console.log(this.tabs);
  }
}
