import { businessPlan } from '@/constants';
import { ReducerState, ActionType, InitialState } from '@/types';

export function reducer(state: ReducerState, action: ActionType) {
    console.log(action);
    switch(action.type) {
      case 'plan':
        return {...state,
          active: action.payload, 
          activePlanList: state.plansList[action.payload] 
        };
      case 'service':
       const currActive = state.plansList[state.active];
       let temp = state.plansList[state.active];
        
       if(action.activeStatus) {
          const serviceIndex = currActive.indexOf(action.name);
          temp = temp.slice(0, serviceIndex).concat(temp.slice(serviceIndex + 1));
       } else {
        temp = [...temp, action.name]
       }
  
       state.plansList[state.active] = temp;
       return {...state, activePlanList: temp}
    }
  }

export const initialState: InitialState = {
  active: businessPlan[0],
  plansList: {
    [businessPlan[0]]: ["Zenefits"],
    [businessPlan[1]]: ["Workday", "Sapling"],
    [businessPlan[2]]: ["Xero", "Rippling", "Expensify"]
  }
};

initialState.activePlanList = initialState.plansList[initialState.active]

