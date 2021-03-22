import {Action} from "@ngrx/store";
import {Metric} from "../model/Metric";
import * as MetricActions from "../actions/MetricActions";

// const initialState : Metric = {
//     isMetric:false
// }

const initialState:boolean = false;
export function reducer(state:boolean= initialState, action: MetricActions.Actions):boolean{
    switch(action.type){
        case MetricActions.CHANGE_METRIC:
            return action.payload;
        default:
            return state;
    }
}