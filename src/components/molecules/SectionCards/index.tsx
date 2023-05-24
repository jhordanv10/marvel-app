"use client";
import { CardCharacter, Paginator } from "@/components";
import { CharacterType } from "@/typed";
import { useState } from "react";

interface CharacterProps {
  characters: CharacterType[];
}

export const SectionCards = ({ characters }: CharacterProps) => {
  // const firstFiveCharacters = characters.slice(0, 5);
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 5;

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const totalPages = Math.ceil(characters.length / charactersPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="mt-5">
      <div className="flex justify-center items-center gap-3 flex-wrap">
        {currentCharacters.map((character: CharacterType) => (
          <CardCharacter key={character.id} character={character} />
        ))}
      </div>
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
};
