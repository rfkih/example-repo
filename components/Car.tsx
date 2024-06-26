import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { CreatePostRequest, CreatePostResponse, CarProps } from '../app/type/TypeInfo';
import { TypeInfo, TypeInfoArray } from '@/app/dto/TypeINfo'
// interface CarProps{
//     typeID: number;
//     type: string;
//     Series: string;
//     ImageLink: string;
// }



interface CarItems {
  items: CarProps[];
}

const CarModel = ({typeID,Type, Series, ImageLink  } : TypeInfo) => {


    return (
        <div className="max-w-sm rounded-sm bg-white hover:brightness-110 cursor-pointer hover:font-bold">
            <Image
              src={ImageLink}
              alt="map"
              width={100}
              height={100}
              className="rounded-lg"
            />
            <div className="flexCenter">
              <h4 className="regular-16 text-gray-50 regular-14">{Type}</h4>
            </div>
        </div>
    )
}

const Car = ({items} : TypeInfoArray) => {
 
  return (
    <section className='flexCenter 2xl:max-container relative  flex-col '>
        <div className='hide-scrollbar flex w-full items-start justify-start gap-8  '>
        {items.map((item) => (
              <CarModel
                typeID={item.typeID} 
                ImageLink={item.ImageLink}
                Series={item.Series}
                Type={item.Type}
              />
            ))}
        </div>
    </section>
  )
}

export default Car
