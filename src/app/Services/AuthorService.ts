import { Injectable } from "@angular/core";
import { IBlog, IBlogQuery } from "../Types/BlogQuery";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class AuthorService {

    constructor(private httpService: HttpClient){

    }
    findResult(query: IBlogQuery ): Promise<IBlog[]>{
        var result = this.GetAllBlog();
        return result.then(x=>
            x.filter(
                (y,i)=>
                (y.author == query.author  || query.author == '') 
                && y.content.includes(query.searchText)
            ));
        
    }
    GetAllBlog(): Promise<IBlog[]> {
        var authUrl = '/assets/blogs.json';
        return this.httpService.get<IBlog[]>(authUrl).toPromise();
    }
}

