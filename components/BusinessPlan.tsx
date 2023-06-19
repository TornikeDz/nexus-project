import { businessPlan } from '@/constants';
import { BusinessPlans } from '@/types';

const BusinessPlan = ({activePlan, activatePlan}: BusinessPlans) => {

    const setActivePlan = (currentPlan: string) => {
        activatePlan({type: 'plan', payload: currentPlan});
    }

    return (
        <div className="flex justify-center max-sm:border-b-2 ">
            <div className="flex gap-[8px] justify-center small_screen_plan_list ">
                {businessPlan.map((item, index) => (
                    <button onClick={() => setActivePlan(item)} key={`${item} ${index}`} disabled={activePlan === item}
                      className={`font-SfBd max-sm:font-SfMd text-xs leading-[19.2px] tracking-widest whitespace-nowrap
                      text-violet-dark sm:opacity-80 max-sm:opacity-60  sm:border-violet-darkest
                      sm:border sm:rounded-2xl  sm:border-opacity-10 border-solid 
                      py-[9.5px] px-[15px] cursor-pointer 
                      small_screen_plan__list__items ${activePlan === item ? 'active' : ''}`}>
                        {item}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default BusinessPlan
