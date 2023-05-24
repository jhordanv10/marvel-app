"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SectionInfo, SectionCards, Loading } from "@/components";

const publicKey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY;
const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY;
const baseUrl = "https://gateway.marvel.com/v1/public";
const endpoint = "/characters";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Crea un timestamp para la solicitud
    const timestamp = new Date().getTime();

    // Genera un hash usando el timestamp y tus claves
    const hash = require("crypto")
      .createHash("md5")
      .update(timestamp + (privateKey ? privateKey : "") + publicKey)
      .digest("hex");

    // Realiza la solicitud Fetch con Axios
    axios
      .get(baseUrl + endpoint, {
        params: {
          ts: timestamp,
          apikey: publicKey,
          hash: hash,
          limit: 25,
        },
      })
      .then((response) => {
        setCharacters(response.data.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Contenido de la página
  return (
    <section className="mt-5">
      {loading ? (
        <Loading />
      ) : (
        <div className="text-golden-2 max-w-page mx-auto px-4 xs:px-10 sm:px-24 md:px-28 lg:px-32 xl:px-0">
          <SectionInfo />
          <SectionCards characters={characters} />
        </div>
      )}
    </section>
  );
};

export default Characters;
