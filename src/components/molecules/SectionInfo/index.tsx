import { CardInfo } from "@/components/index";

export const SectionInfo = () => {
  const cardInfo = [
    {
      id: 1,
      name: "Progreso de películas producidas",
      // size: "w-2/6",
      size: "big",
      type: "progress",
    },
    {
      id: 2,
      name: "Aquí va un video",
      // size: "w-1/4",
      size: "small",
      type: "video",
    },
    {
      id: 3,
      name: "Aquí va una imagen",
      // size: "w-1/4",
      size: "small",
      type: "image",
    },
  ];
  return (
    <div className="flex justify-center items-center flex-wrap gap-12  ">
      {cardInfo.map((card) => (
        <CardInfo key={card.id} item={card} />
      ))}
    </div>
  );
};
