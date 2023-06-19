import { ReducerState, ActionType } from '@/types';

function reducer(state: ReducerState, action: ActionType) {
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

export default reducer;