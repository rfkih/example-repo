import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CarProps{
    backgroundImage: string;
    title: string;
    subtitle: string;
    peopleJoined: string;
}

const CarModel = ({backgroundImage, title, subtitle, peopleJoined} : CarProps) => {
    return (
        <div className="max-w-sm rounded-sm bg-white hover:brightness-110 cursor-pointer hover:font-bold">
            <Image
              src={backgroundImage}
              alt="map"
              width={100}
              height={100}
              className="rounded-lg"
            />
            <div className="flexCenter">
              <h4 className="regular-16 text-gray-50 regular-14">{title}</h4>
            </div>
        </div>
    )
}

const Car = () => {
  return (
    <section className='flexCenter 2xl:max-container relative  flex-col '>
        <div className='hide-scrollbar flex w-full items-start justify-start gap-8  '>
            <CarModel
            backgroundImage="/e30.png" 
            title="BMW E30"
            subtitle="Prigen, Pasuruan"
            peopleJoined="50+ Joined"/> 
            <CarModel
            backgroundImage="/e36.png" 
            title="BMW E36"
            subtitle="Somwhere in the Wilderness"
            peopleJoined="50+ Joined"
            />
            <CarModel
            backgroundImage="/e46.png" 
            title="BMW E46"
            subtitle="Somwhere in the Wilderness"
            peopleJoined="50+ Joined"
            />
        </div>
    </section>
  )
}

export default Car
