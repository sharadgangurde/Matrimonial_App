import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NewsPage } from '../news/news';
import { UserListPage } from '../user/user-list/user-list';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabsEnabled = true;
  
  tab1Root = HomePage;
  tab2Root = UserListPage;
  tab3Root = ContactPage;
  tab4Root = UserListPage;
  tab5Root = NewsPage;

  constructor() {

  }
        
  enableTabs(enable: boolean): void {
    this.tabsEnabled = enable;
  }
}
