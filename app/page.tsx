import Image from 'next/image';
import { intergrations } from '@/constants/index';
import { Heading, BusinessPlan, Description, Client } from '@/components'

export default function Home() {
  return (
      <>
        {/* <div className="flex flex-col mx-auto gap-6 max-sm:mx-[25px] max-w-[779px]">
          <Heading/>
          <Description/>
        </div> */}
        <Client/>
      </>
  )
}
