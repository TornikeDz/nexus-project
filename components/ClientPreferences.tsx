import React from 'react';
import Image from 'next/image';
import { Client, Service  } from '@/components';
import { servicesLeft, servicesRight } from '@/constants';
import { ClientPref } from '@/types'

const ClientPreferences = ({activatedPlanList, serviceStatus}: ClientPref) => {
    return (
        <div className="flex items-baseline justify-center mx-auto min-h-[762px]
        max-sm:flex-col max-sm:gap-5 max-sm:max-h-[623px] max-sm:overflow-hidden 
        
        medium-width
        ">
            <div className="flex flex-col gap-5 max-sm:order-2 max-lg:order-2">
                {servicesLeft.map((item, index) => (
                    <div key={`01-${item}-${index}`}>
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
                <Client activatedPlanList={activatedPlanList}/>
            </div>
            <div className="flex flex-col gap-5 relative max-sm:mt-[30px] max-lg:order-1">
                {servicesRight.map((item, index) => (
                    <div key={`02-${item}-${index}`}>
                        <div >
                            <Service serviceStatus={serviceStatus}
                            name={item.name}
                            description={item.description}
                            icon={item.icon}
                            activeStatus={activatedPlanList.includes(item.name)}
                            />
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default ClientPreferences
