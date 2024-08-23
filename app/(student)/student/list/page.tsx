import React from "react";
import { fetchPokemon } from "./actions";
import { StudentList } from "@/modules/student";

const StudentListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const pokemons = await fetchPokemon(Number(searchParams.offset) || 0);

  return (
    <>
      <div className="text-gray-900">StudentListPage</div>
      <h1 className="mb-3 text-gray-900">Pokemon</h1>
      <p className="text-gray-900">Count: {pokemons.count}</p>
      <StudentList
        students={pokemons.results}
        nextCursor={pokemons.next}
        previousCursor={pokemons.previous}
        currentOffset={Number(searchParams.offset) || 0}
      />
    </>
  );
};

StudentListPage.displayName = "StudentListPage";
export default StudentListPage;
