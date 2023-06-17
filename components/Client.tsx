import React from 'react';
import Image from 'next/image'
import { client } from '@/constants';

function Client() {
    return (
        <div className="flex justfy-center relative top-[50px]">
            <div className="max-w-[380px] min-h-[268px] max-sm:min-h-[240px] bg-purple-light-100
            rounded-3xl border-2 border-violet-soft flex flex-col relative pl-[41px] pr-[39px] text-center">
                <Image
                src={client.avatar}
                width={86}
                height={86}
                alt={`${client.name}'s avatar`}
                className="absolute top-[-30px] left-[50%] translate-x-[-50%]"
                />
                <div className="font-SfBd text-lg leading-[18px] text-violet-darkest pt-[70px] max-sm:pt-[63px]">
                    {client.name}
                </div>
                <div className="font-SfRg text-sm leading-[22px] text-purple-light-700 pt-1.5">{client.position}</div>
                <p className="font-SfRg leading-[26px] pt-5">{client.description}</p>
            </div>
        </div>
    )
}

export default Client
