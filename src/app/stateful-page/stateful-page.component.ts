import { Component, OnInit } from '@angular/core';
import { StateComponent } from '../Core/StateComponent';
import { IBlog } from '../Types/BlogQuery';
import {AuthorService} from './../Services/AuthorService';
import { StatefulPageState } from '../States/statefulPageState';

@Component({
  selector: 'app-stateful-page',
  templateUrl: './stateful-page.component.html',
  styleUrls: ['./stateful-page.component.css']
})
export class StatefulPageComponent extends StateComponent<StatefulPageState> implements OnInit {

  searchResult:IBlog[] = [];

  constructor(private authorService: AuthorService) { 
    super(StatefulPageState); 
  }

  public onSearchCriteriaChanged(){
    this.saveState();
    this.applySearch();
  }

  ngOnInit(): void {
    this.applySearch();
  }
  
  applySearch() {
    
    var  query  = { searchText: this.pageState.searchText, author: this.pageState.selectedAuthor }
    if(query.author == this.pageState.defaultAuthor){
      query.author = '';
    }
    console.info(query);
    this.authorService
      .findResult(query)
      .then((r)=> this.searchResult = r);

  }

}
