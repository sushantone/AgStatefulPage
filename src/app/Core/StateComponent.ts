import { OnInit } from "@angular/core";
import { BaseState, DefaultState } from "./BaseState";
import { IStateStore } from "./IStateStore";
import * as localStorageStateStore from './LocalStorageStateStore';
export class StateComponent<TState extends BaseState>{

    stateStore: IStateStore  = localStorageStateStore.default;
    pageState: TState ;

    constructor(type : (new() => TState)){      
        this.pageState = new type();
        this.loadState();
    }

    loadState() {
         var result = <TState>this.stateStore.loadState<TState>(this.GetStateName());
         if(result != null){
             this.pageState = result;
         }
    }

    saveState(){
       this.stateStore.saveState(this.GetStateName(), this.pageState);
    }
    
    GetStateName(): string {
        return this.pageState.name;
    }

}

