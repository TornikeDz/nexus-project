"use client";

import React from 'react';
import { businessPlan } from '@/constants';

const BusinessPlan = ({activePlan, makePlan}) => {

    return (
        <div className="flex justify-center">
            <ul className="flex gap-[8px] justify-center small_screen_plan_list">
                {businessPlan.map((item, index) => (
                    <li onClick={(e) => makePlan(item)} key={index}
                      className={`font-SfBd text-xs leading-[19.2px] tracking-wider whitespace-nowrap
                      text-violet-dark opacity-80 max-sm:opacity-60 sm:border-violet-darkest
                      sm:border sm:rounded-2xl  sm:border-opacity-10 border-solid 
                      py-[9.5px] px-[15px] cursor-pointer 
                      small_screen_plan__list__items ${activePlan === item ? 'active' : ''}`}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BusinessPlan
