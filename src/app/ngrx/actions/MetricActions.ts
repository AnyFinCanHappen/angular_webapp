import {Action} from "@ngrx/store";
export const CHANGE_METRIC = "[METRIC] CHANGE";

export class ChangeMetric implements Action{
    readonly type = CHANGE_METRIC;
    constructor(public payload:boolean){
    }
}
export type Actions= ChangeMetric;