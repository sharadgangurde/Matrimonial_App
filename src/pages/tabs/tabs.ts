import { Component } from '@angular/core';
import { BusinessPage } from '../business/business';
import { HomePage } from '../home/home';
import { MatrimonyPage } from '../matrimony/matrimony';
import { NewsPage } from '../news/news';
import { UserListPage } from '../user/user-list/user-list';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabsEnabled = true;
  
  tab1Root = HomePage;
  tab2Root = UserListPage;
  tab3Root = MatrimonyPage;
  tab4Root = BusinessPage;
  tab5Root = NewsPage;

  constructor() {

  }
        
  enableTabs(enable: boolean): void {
    this.tabsEnabled = enable;
  }
}
