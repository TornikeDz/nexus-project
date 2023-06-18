'use client'

import React from 'react';
import Image from 'next/image';
import {services} from '@/constants'

const service = services[0];
const Service = () => {


    return (
        <div className="max-w-[280px] pl-4 pr-[33px] py-4 
            flex justify-between items-center
            border rounded-2xl border-light service_active">
            <div className="flex gap-2">
            <Image
                src={service.icon}
                width={48}
                height={48}
                alt={`${service.name}'s icon`}
                className="rounded-2xl"
            />
            <div className="flex-col">
                <div className="font-SfMd block tracking-wider leading-[26px]  text-violet-darkest">
                    {service.name}
                </div>
                <div className="font-SfRg tracking-wider text-xs leading-[19px] text-purple-light-700">
                    {service.description}
                </div>
            </div>
            </div>
            <label htmlFor="checkbox" className="switch relative inline-block w-[22px] h-[14px] 
                border-2  rounded-2xl cursor-pointer border-purple-light-400">
                <input id="checkbox" type="checkbox" 
                className="w-0 h-0 opacity-0 "/>
                <span className="slider absolute  inset-0"/>
            </label>
        </div>
    )
}

export default Service

// <label className="relative inline-block w-[22px] h-3.5
// border-2 border-purple-light-100 rounded-2xl">
//     <input type="checkbox" checked={check} onChange={setCheckStatus}
//     className="absolute cursor-pointer inset-0 before:w-4" content={""}/>
//     {/*   */}
//     <span className="slider"/>
// </label>

