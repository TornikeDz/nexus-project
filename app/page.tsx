'use client';
import Image from 'next/image';
import { useReducer } from 'react';
import { Heading, BusinessPlan, Description, Client, Service, ClientPreferences } from '@/components';
import { businessPlan } from '@/constants';
import { businessPlanReducer } from '@/types'

function reducer(state, action) {
  switch(action.type) {
    case 'plan':
      return {...state,
        active: action.payload, 
        activePlanList: state.plansList[action.payload] 
      };
    case 'service':
     
    return state;

  }
}

const initialState = {
  active: businessPlan[0],
  plansList: {
    [businessPlan[0]]: ["Zenefits"],
    [businessPlan[1]]: ["Workday", "Sapling"],
    [businessPlan[2]]: ["Xero", "Rippling", "Expensify"]
  },
  
};

initialState.activePlanList = initialState.plansList[initialState.active]

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
      <div className="flex flex-col gap-[50px] ">
        <div className="flex flex-col mx-auto gap-6 max-sm:mx-[25px] max-w-[779px]">
          <Heading/>
          <Description/>
        </div>
        <BusinessPlan activePlan={state.active} activatePlan={dispatch}/>
        <ClientPreferences activatedPlanList={state.activePlanList} serviceStatus={dispatch}/>
      </div>
  )
}
