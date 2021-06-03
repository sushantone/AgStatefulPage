export interface IStateStore {
    loadState<TState>(name: string): TState;
    saveState(name:string, state: any): void;

}