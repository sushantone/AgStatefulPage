import { Component, OnInit } from '@angular/core';
import { StateComponent } from '../Core/StateComponent';
import { AuthorService } from '../Services/AuthorService';
import { StatefulPageState } from '../States/statefulPageState';
import { IBlog } from '../Types/BlogQuery';

@Component({
  selector: 'app-stateful-page2',
  templateUrl: './stateful-page2.component.html',
  styleUrls: ['./stateful-page2.component.css']
})
export class StatefulPage2Component extends StateComponent<StatefulPageState> implements OnInit {

  defaultAuthor: string = this.pageState.defaultAuthor;
  selectedAuthor: string = this.pageState.selectedAuthor;
  searchText: string = this.pageState.searchText;
  searchResult:IBlog[] = [];

  constructor(private authorService: AuthorService) { 
    super(StatefulPageState); 
  }

  public onAuthorChanged(){
    this.setState({ 'selectedAuthor': this.selectedAuthor});
  }

  public onSearchInputChanged(){
    this.setState({ 'searchText': this.searchText});
  }

  onStateChanged(oldValues: StatefulPageState & Partial<StatefulPageState>, newValues: Partial<StatefulPageState>) {
       console.info("oldValues: " + oldValues) ;
       console.info("newValues: " + newValues) ;
       if(oldValues.selectedAuthor == "Author 3" && newValues.selectedAuthor == "Author 2")
       {
         return;
       }
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

