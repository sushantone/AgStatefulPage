import { BaseState } from "../Core/BaseState";

export class StatefulPageState extends BaseState{
    name: string = 'StatefulPageState';

    defaultAuthor: string = '-- Show All --';
    selectedAuthor: string = this.defaultAuthor;
    searchText: string = "";

}