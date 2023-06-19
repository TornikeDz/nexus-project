import { Client, Service  } from '@/components';
import { servicesLeft, servicesRight } from '@/constants';
import { ClientPref } from '@/types'

const ClientPreferences = ({activatedPlanList, serviceStatus}: ClientPref) => {
    return (
        <div className="flex items-baseline justify-center min-h-[762px] max-sm:min-h-[633px]
        max-sm:flex-col max-sm:gap-10  max-sm:overflow-hidden mx-auto
        medium-width 
        ">
            <div className="flex flex-col gap-5 max-sm:order-3 max-lg:order-2 max-sm:hidden">
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
            <div className="flex flex-col gap-5 relative max-sm:mt-[30px] max-lg:order-3 max-sm:order-2">
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
