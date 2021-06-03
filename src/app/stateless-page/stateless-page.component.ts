import { Component, OnInit } from '@angular/core';
import { IBlog } from '../Types/BlogQuery';
import {AuthorService} from './../Services/AuthorService';

@Component({
  selector: 'app-stateless-page',
  templateUrl: './stateless-page.component.html',
  styleUrls: ['./stateless-page.component.css']
})
export class StatelessPageComponent implements OnInit {

  defaultAuthor: string = '-- Show All --';
  selectedAuthor: string = this.defaultAuthor;
  searchText: string = "";
  searchResult:IBlog[] = [];

  constructor(private authorService: AuthorService) { 
    
  }

  public onSearchCriteriaChanged(){
     this.applySearch();
  }

  ngOnInit(): void {
    this.applySearch();
  }
  applySearch() {
    
    var  query  = { searchText: this.searchText, author: this.selectedAuthor }
    if(query.author == this.defaultAuthor){
      query.author = '';
    }
    console.info(query);
    this.authorService
      .findResult(query)
      .then((r)=> this.searchResult = r);

  }

}
