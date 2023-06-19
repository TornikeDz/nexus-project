import { businessPlan } from '@/constants';
import { ReducerState, ActionType, InitialState, ActionBaseType } from '@/types';

export function reducer(state: ReducerState, action: ActionBaseType) {
    console.log(action);
    switch(action.type) {
      
      case 'plan':
        console.log('action', action)
        console.log('ss',{...state,
          active: action.payload, 
          activePlanList: state.plansList[action.payload] 
        })
        return {...state,
          active: action.payload, 
          activePlanList: state.plansList[action.payload] 
        };
      case 'service':
       const currActive = state.plansList[state.active];
       let temp: string[] = state.plansList[state.active];
        
       if(action.activeStatus) {
          const serviceIndex = currActive.indexOf(action.name);
          temp = temp.slice(0, serviceIndex).concat(temp.slice(serviceIndex + 1));
       } else {
        temp = [...temp, action.name]
       }
  
       state.plansList[state.active] = temp;
       console.log('ss2',{...state, activePlanList: temp});
       return {...state, activePlanList: temp}
    }
  }

export const initialState: InitialState = {
  active: businessPlan[0],
  plansList: {
    [businessPlan[0]]: ["Zenefits"],
    [businessPlan[1]]: ["Workday", "Sapling"],
    [businessPlan[2]]: ["Xero", "Rippling", "Expensify"]
  },
};

initialState.activePlanList = initialState.plansList[initialState.active]

