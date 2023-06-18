import { Dispatch, SetStateAction } from "react";

export interface businessPlans {
    activePlan: string;
    activatePlan: Dispatch<SetStateAction<string>>
}

export interface ServiceModel {
    name: string,
    description: string,
    icon: string,
    activeStatus: boolean
}

export interface businessPlanReducer {
    state: string,
    action: string
}

// Dispatch<SetStateAction<string>>