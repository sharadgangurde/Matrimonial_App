import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MatchPage } from '../match/match';
import { NewsPage } from '../news/news';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabsEnabled = true;
  
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = MatchPage;
  tab5Root = NewsPage;

  constructor() {

  }
        
  enableTabs(enable: boolean): void {
    this.tabsEnabled = enable;
  }
}
