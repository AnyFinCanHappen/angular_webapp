import {Action} from "@ngrx/store";
import {Metric} from "../model/Metric";
import * as MetricActions from "../actions/MetricActions";

const initialState : Metric = {
    isMetric:false
}
export function reducer(state:Metric = initialState, action: MetricActions.Actions):Metric{
    switch(action.type){
        case MetricActions.CHANGE_METRIC:
            let newState:Metric ={
                isMetric:action.payload
            }
            return newState;
        default:
            return state;
    }
}