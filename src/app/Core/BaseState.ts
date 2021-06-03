export abstract class BaseState {
    abstract name: string;

}

export class DefaultState extends BaseState {
    name: string = 'DefaultState';

}
