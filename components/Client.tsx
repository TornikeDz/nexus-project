import Image from 'next/image'
import { client, servicesLeft, servicesRight } from '@/constants';
import { ActivatedPlansListing } from '@/types';
import { WaveSVG, LineSVG } from '../public/SVGs';

const Client = ({activatedPlanList}: ActivatedPlansListing) => {
  return (
        <div className="flex relative top-[30px] max-sm:top-16">
            <div className="relative  flex flex-col max-lg:hidden">
                <div className={`w-[120px] min-h-[100px] relative top-[28px] line-size fill-light 
                ${activatedPlanList.includes(servicesLeft[0].name) ? 'line-on' : ''}`}>
                    <WaveSVG />
                </div>
                <div className={`w-[120px] h-[100px] relative top-[26px] line-size fill-light
                ${activatedPlanList.includes(servicesLeft[1].name) ? 'line-on' : ''}`}>
                    <LineSVG />
                </div>
                <div className={`w-[120px] h-[100px] relative bottom-[74px] right-[1.7px] scale-x-[-1] fill-light
                    ${activatedPlanList.includes(servicesLeft[2].name) ? 'line-on' : ''} `}>
                    <WaveSVG />
                </div>
            </div>
            <div className="max-w-[380px] max-sm:max-w-[323px] min-h-[268px] max-sm:min-h-[240px] bg-purple-light-100
                rounded-3xl border-2 border-violet-soft flex flex-col relative pl-[41px] pr-[39px] text-center">
                <Image
                    src={client.avatar}
                    width={86}
                    height={86}
                    alt={`${client.name}'s avatar`}
                    className="absolute top-[-30px] max-sm:top-[-43px] left-[50%] translate-x-[-50%] rounded-xl"
                />
                <div className="font-SfBd text-lg leading-[18px] text-violet-darkest pt-[70px] max-sm:pt-[63px]">
                    {client.name}
                </div>
                <div className="font-SfRg text-sm leading-[22px] text-purple-light-700 pt-1.5">{client.position}</div>
                <p className="font-SfRg leading-[26px] pt-5">{client.description}</p>
            </div>

            <div className="relative flex flex-col max-lg:hidden">
                <div className={`w-[120px] min-h-[100px] relative top-[28px] scale-x-[-1] fill-light
                ${activatedPlanList.includes(servicesRight[0].name) ? 'line-on' : ''}`}>
                    <WaveSVG />
                </div>
                <div className={`w-[120px] h-[100px] relative top-[26px] fill-light
                ${activatedPlanList.includes(servicesRight[1].name) ? 'line-on' : ''}`}>
                    <LineSVG />
                </div>
                <div className={`w-[120px] h-[120px] relative bottom-[74px] scale-x-[1] fill-light
                ${activatedPlanList.includes(servicesRight[2].name) ? 'line-on' : ''}`}>
                    <WaveSVG />
                </div>
            </div>
        </div>
    )
}

export default Client
