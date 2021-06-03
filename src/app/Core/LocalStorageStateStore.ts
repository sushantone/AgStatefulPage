import { IStateStore } from "./IStateStore";

class LocalStorageStateStore implements IStateStore{

    private setItem(key: string, value: string) {
        localStorage.setItem(key, value);
      }
        
      private getItem(key: string){ 
        return localStorage.getItem(key)
      }
      

    loadState<TState>(name:string) : TState {
        var stateStr = this.getItem(name) as string;
        
        var result = <TState>JSON.parse(stateStr);
        return result;
    }
    saveState(name: string, state: any): void {
        var stateString = JSON.stringify(state);
        this.setItem(name,stateString);
    }

}

export default new LocalStorageStateStore() ;