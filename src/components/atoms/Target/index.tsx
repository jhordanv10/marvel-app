import { TargetType, CharacterType } from "@/typed";

interface TargetProps {
  target: TargetType;
}

export const Target = ({ target }: TargetProps) => {
  return (
    <div className="flex items-center justify-center gap-4 rounded-md border border-gray-2 bg-gray-4 px-5 py-2.5">
      <h2 className="text text-base">{target.name}:</h2>
      <span className="text-md italic text-2xl">{target.amount}</span>
    </div>
  );
};
