'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Heading, BusinessPlan, Description, Client, Service } from '@/components';
import { businessPlan } from '@/constants'

export default function Home() {
  const [plan, setPlan] = useState(businessPlan[0]);
  
  return (
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-col mx-auto gap-6 max-sm:mx-[25px] max-w-[779px]">
          <Heading/>
          <Description/>
        </div>
        <BusinessPlan activePlan={plan} makePlan={setPlan}/>
      </div>
  )
}
