import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { CreatePostRequest, CreatePostResponse, CarProps } from '../app/type/TypeInfo';

// interface CarProps{
//     typeID: number;
//     type: string;
//     Series: string;
//     ImageLink: string;
// }



interface CarItems {
  items: CarProps[];
}

const CarModel = ({typeID,Type, Series, ImageLink  } : CarProps) => {


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

const Car = ({cars} : CreatePostResponse) => {
 
  return (
    <section className='flexCenter 2xl:max-container relative  flex-col '>
        <div className='hide-scrollbar flex w-full items-start justify-start gap-8  '>
        {cars.map((car) => (
              <CarModel
                typeID={car.typeID} // Use a unique key for each component when using .map()
                ImageLink={car.ImageLink}
                Series={car.Series}
                Type={car.Type}
              />
            ))}
        </div>
    </section>
  )
}

export default Car
