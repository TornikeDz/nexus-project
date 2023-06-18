'use client'

import React from 'react';
import Image from 'next/image';
import {ServiceModel} from '@/types'

const Service = ({name, description, icon, activeStatus, serviceStatus}: ServiceModel) => {
    const changeServiceStatus = () => {
        console.log(name);
        // serviceStatus({type: 'service', name: name, activeStatus})
    }

    return (
        <div className={`max-w-[280px] pl-4 pr-[33px] py-4 
            flex justify-between items-center
            border rounded-2xl border-light
            ${activeStatus ? "service_active " : ''}`} >
            <div className="flex gap-2">
            <Image
                src={icon}
                width={48}
                height={48}
                alt={`${name}'s icon`}
                className="rounded-2xl w-[48px] h-[48px]"
            />
            <div className="flex-col">
                <div className="font-SfMd block tracking-wider leading-[26px]  text-violet-darkest">
                    {name}
                </div>
                <div className="font-SfRg tracking-wider text-xs leading-[19px] text-purple-light-700">
                    {description}
                </div>
            </div>
            </div>
            <label  htmlFor="checkbox" className="switch relative inline-block w-[22px] h-[14px] 
                border-2  rounded-2xl cursor-pointer border-purple-light-400">
                <input id="checkbox" type="checkbox" checked={activeStatus} onChange={changeServiceStatus}
                className="w-0 h-0 opacity-0 "/>
                <span className="slider absolute  inset-0"/>
            </label>
        </div>
    )
}

export default Service
