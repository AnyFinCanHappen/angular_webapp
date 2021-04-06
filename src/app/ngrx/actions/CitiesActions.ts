import {Action} from "@ngrx/store"; 
import {Cities} from "../model/Cities" 
export const ADD_CITY = "[CITIES] ADD";
export const REMOVE_CITY = "[CITIES] REMOVE";

export class AddCity implements Action{
  readonly type:string = ADD_CITY;
  constructor(public payload:Cities){}
}
export class RemoveCity implements Action{
  readonly type:string = REMOVE_CITY;
  constructor(public payload:number){}
}

export type Actions = AddCity | RemoveCity 