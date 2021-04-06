import {Cities} from "../model/Cities";
import * as CitiesActions from "../actions/CitiesActions";

const cities:any | string= localStorage.getItem("cities");
let initialState : Cities[]= []
if(cities!== null && cities!== undefined){
  initialState = JSON.parse(cities);
}

export function citiesReducer(state:Cities[] = initialState, action:CitiesActions.Actions):Cities[]{
  switch(action.type){
    case CitiesActions.ADD_CITY:
      const city:any= action.payload;
      return [...state, city];
    case CitiesActions.REMOVE_CITY:
      const removeIndex:any= action.payload;
      return state.filter((item,index)=>index !== removeIndex);
    default:
      return state;

  }

}