import { ActionReducerMap } from "@ngrx/store";
import {Metric} from "./ngrx/model/Metric";
import {reducer} from "./ngrx/reducer/MetricReducer";

export interface AppState{
    readonly Metric:boolean;
}
export const reducers: ActionReducerMap<AppState, any> ={
    Metric:reducer
}