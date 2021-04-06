import { ActionReducerMap } from "@ngrx/store";
import {Metric} from "./ngrx/model/Metric";
import {Cities} from "./ngrx/model/Cities";
import {reducer} from "./ngrx/reducer/MetricReducer";
import {citiesReducer} from "./ngrx/reducer/CitiesReducer";
export interface AppState{
    readonly Metric:boolean;
    readonly Cities:Cities[];
}
export const reducers: ActionReducerMap<AppState, any> ={
    Metric:reducer,
    Cities:citiesReducer
}