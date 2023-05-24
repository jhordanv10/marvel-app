import Image from "next/image";
import iconsCard from "@assets/images/iconsCard.svg";
import circleCard from "@assets/images/circleCard.svg";
import { Target } from "@components/index";
import { TargetType, CharacterType } from "@typed/index";
import Swal from "sweetalert2";

interface CardCharacterProps {
  character: CharacterType;
}

export const CardCharacter = ({ character }: CardCharacterProps) => {
  const targets: TargetType[] = [
    {
      id: 1,
      name: "Comics",
      amount: character.comics.available,
    },
    {
      id: 2,
      name: "Películas",
      amount: character.series.available,
    },
  ];

  const handleClick = (character: any) => {
    Swal.fire({
      icon: "info",
      title: character.name,
      imageUrl: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: "Custom image",
      text: character.description ? character.description : "Sin descripción",
    });
  };
  return (
    <div
      onClick={() => handleClick(character)}
      style={{ width: "248px", height: "448px" }}
      className="hover:shadow-cardHover ease-in-out transition-all duration-300  cursor-pointer box-border text-white bg-gradient-card  opacity-80 rounded-md py-10 px-4  border border-gray-3 "
    >
      <div className="relative">
        <Image
          src={iconsCard}
          alt="Card1"
          className="absolute top-1.5"
          style={{ left: "18px" }}
        />
        <h2 className=" text-golden-1 text-xs uppercase text-center max-w-80 mx-auto min-h-45">
          {character.name}
        </h2>
      </div>
      <div className="relative">
        <Image
          src={circleCard}
          alt="circleCard"
          className="mx-auto my-4 hover:rotate-90 ease-in-out transition-all duration-700"
        />
        <div className="absolute left-0 right-0">
          <div
            style={{ width: "85px", height: "85px", top: "28%" }}
            className="mx-auto"
          >
            <div
              className="relative w-full h-full scale-150 overflow-hidden "
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "40px",
                bottom: "154px",
              }}
            >
              <Image
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt="circleCard"
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {targets.map((target) => (
          <Target key={target.id} target={target} />
        ))}
      </div>
    </div>
  );
};
