'use client'

import React from 'react';
import { Client, Service  } from '@/components';
import { servicesLeft, servicesRight } from '@/constants';

const ClientPreferences = ({activatedPlanList, serviceStatus}) => {
    return (
        <div className="flex items-baseline max-sm:flex-col max-sm:gap-5 max-sm:max-h-[623px] overflow-scroll">
            <div className="flex flex-col gap-5 max-sm:order-2">
                {servicesLeft.map((item, index) => (
                    <div key={`service ${item} ${index}`}>
                        <Service serviceStatus={serviceStatus}
                        name={item.name}
                        description={item.description}
                        icon={item.icon}
                        activeStatus={activatedPlanList.includes(item.name)}
                        />
                    </div>
                ))}
            </div>
            <div>
                <Client/>
            </div>
            <div className="flex flex-col gap-5 relative max-sm:mt-[30px]">
                {servicesRight.map((item, index) => (
                    <div key={`service ${item} ${index}`}>
                        <Service serviceStatus={serviceStatus}
                        name={item.name}
                        description={item.description}
                        icon={item.icon}
                        activeStatus={activatedPlanList.includes(item.name)}
                        key={`service ${item} ${index}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ClientPreferences
