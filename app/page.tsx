import Image from 'next/image';
import { intergrations } from '@/constants/index';

export default function Home() {
  return (
    <div className="poka">
      {intergrations.map(item => (
        <div>
          <h1>{item.name}</h1>
          <h2>{item.description}</h2>
          <Image
            src={item.icon}
            width={48}
            height={48}
            alt={`${item.name} icon`}
          />
        </div>
      ))}
    </div>
  )
}
