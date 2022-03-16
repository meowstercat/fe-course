import {BaseModel} from './BaseModel';

export class ListResponse<T> extends BaseModel {
  private _data: T[];

  constructor(data: T[]) {
    super();
    this._data = data;
  }

  get data(): T[] {
    return this._data;
  }

  set data(value: T[]) {
    this._data = value;
  }
}
