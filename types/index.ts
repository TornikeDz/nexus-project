import { Dispatch, SetStateAction } from "react";

export interface BusinessPlans {
    activePlan: string;
    activatePlan: Dispatch<ActionBaseType | ActionType>;
}
export interface ServiceModel {
    name: string;
    description: string;
    icon: string;
    activeStatus: boolean;
    serviceStatus: Dispatch<ActionType | ActionBaseType>;
}

export interface InitialState {
    active: string;
    plansList: {
        [x: string]: string[];
    };
    activePlanList?: string[];
}

// reducer inputs
export interface ActionType {
    type: 'plan' | 'service';
    name?: string;
    activeStatus?: boolean;
    payload?: string
}

export interface ActionBaseType {
    type: 'plan' | 'service';
    name: string;
    activeStatus?: boolean;
    payload: string
}

export interface ReducerState {
    active: string,
    activePlansList?: ActivatedPlansListing,
    plansList: ObjectOfArrays
}


export interface ActivatedPlansListing {
    activatedPlanList: string[]
}

export interface ObjectOfArrays {
    [key: string]: string[];
  }

export interface ClientPref extends  ActivatedPlansListing{
    serviceStatus: any;
}

  // svg component color
export interface Color {
    color: string
  }
// Dispatch<SetStateAction<string>>