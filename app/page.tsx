'use client';
import { reducer, initialState} from '../Reducer';
import React, { useReducer } from 'react';
import { Heading, BusinessPlan, Description, ClientPreferences } from '@/components';
import { ReducerState, ActionType, InitialState } from '@/types';

export default function Home() {
  const [state, dispatch]: ReducerState | any = useReducer<React.Reducer<ActionType, InitialState>>(reducer, initialState);  
  return (
      <div className="flex flex-col gap-[50px] max-sm:gap-[33px] h-[762px] max-sm:max-h-[623px]">
        <div className="flex flex-col mx-auto gap-6 max-sm:mx-[25px] max-w-[779px] pt-20 max-sm:pt-[50px]">
          <Heading/>
          <Description/>
        </div>
        <div className="flex flex-col sm:gap-[50px]">
          <BusinessPlan activePlan={state.active} activatePlan={dispatch}/>
          <ClientPreferences activatedPlanList={state.activePlanList} serviceStatus={dispatch}/>
        </div>
      </div>
  )
}
