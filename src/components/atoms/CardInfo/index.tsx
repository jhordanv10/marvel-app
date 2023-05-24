import Image from "next/image";
import { Video, Progress } from "@components/index";
import { CardInfoType } from "@/typed";

interface CardInfoProps {
  item: CardInfoType;
}

export const CardInfo = ({ item }: CardInfoProps) => {
  return (
    <div
      className={` ${
        item.size === "big" ? "xl:w-2/6" : "md:w-5/12 xl:w-1/4"
      } w-full border border-golden-4 rounded-md h-48 xs:h-52 lg:h-48 sm:h-64 bg-black bg-opacity-80 border-opacity-50  
      ${
        item.type === "image"
          ? "object-cover "
          : "flex justify-center items-center"
      }
       hover:scale-105 transition-all duration-300 ease-in-out`}
    >
      {item.type === "image" ? (
        <Image
          priority
          src="https://i.pinimg.com/564x/12/28/0a/12280a45af955f87462ec57aa9087ddb.jpg"
          alt="posterMarvel"
          className=" object-cover p-0 w-full rounded-md "
          width={500}
          height={500}
          style={{ objectFit: "contain", height: "inherit" }}
        />
      ) : item.type === "video" ? (
        <Video />
      ) : item.type === "progress" ? (
        <Progress meta={100} metaAlcanzada={60} />
      ) : (
        ""
      )}
    </div>
  );
};
