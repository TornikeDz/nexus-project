import { Client, Service  } from '@/components';
import { servicesLeft, servicesRight } from '@/constants';
import { ClientPref } from '@/types'

const ClientPreferences = ({activatedPlanList, serviceStatus}: ClientPref) => {
    return (
        <div className="flex items-baseline justify-center sm:min-h-[762px] max-sm:max-h-[634px] 
        max-sm:flex-row max-sm:gap-20  max-sm:overflow-scroll mx-auto 
        medium-width 
        ">
            {/* max-sm:hidden */}
            <div className="flex flex-col gap-5  max-sm:order-3 max-lg:order-2"> 
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
            <div className="order-0">
                <Client activatedPlanList={activatedPlanList}/>
            </div>
            <div className="flex flex-col gap-5 relative max-sm:mt-[3px] max-lg:order-3 max-sm:order-2">
                {servicesRight.map((item, index) => (
                    <div key={`02-${item}-${index}`} className={`${item.name === "Expensify" ? 'order-2': ''}`}>
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
