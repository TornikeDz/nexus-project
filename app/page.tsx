'use client';
import reducer from '../Reducer';
import React, { useReducer } from 'react';
import { Heading, BusinessPlan, Description, Client, Service, ClientPreferences } from '@/components';
import { businessPlan } from '@/constants';
import { ReducerState, ActionType, InitialState } from '@/types';

const initialState: InitialState = {
  active: businessPlan[0],
  plansList: {
    [businessPlan[0]]: ["Zenefits"],
    [businessPlan[1]]: ["Workday", "Sapling"],
    [businessPlan[2]]: ["Xero", "Rippling", "Expensify"]
  }
};

initialState.activePlanList = initialState.plansList[initialState.active]
// active, plansList
export default function Home() {
  const [state, dispatch]: ReducerState | any = useReducer<React.Reducer<ActionType, InitialState>>(reducer, initialState);  
  return (
      <div className="flex flex-col gap-[50px] h-[762px] max-sm:max-h-[623px]">
        <div>

        </div>
        <div className="flex flex-col mx-auto gap-6 max-sm:mx-[25px] max-w-[779px]">
          <Heading/>
          <Description/>
        </div>
        <BusinessPlan activePlan={state.active} activatePlan={dispatch}/>
        <ClientPreferences activatedPlanList={state.activePlanList} serviceStatus={dispatch}/>
      </div>
  )
}
