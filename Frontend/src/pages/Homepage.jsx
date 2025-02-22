import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import LoginBox from "../components/LoginBox";
import { useLoginCard } from "../contexts/ShowLoginCard";

const Homepage = () => {
  const { showCard, toggleShow } = useLoginCard();

  // to store the notes
  const [notes, setnotes] = useState([]);

  useEffect(() => {
    if (showCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showCard]);

  return (
    <section className="min-h-screen max-h-full relative w-[100vw]">
      {/* for the login box */}
      <LoginBox></LoginBox>
      <Navbar />
      {/* note show case section */}
      {notes.length !== 0 ? (
        <div className="px-10 py-10 flex flex-wrap items-center justify-center gap-20">
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      ) : (
        <p className="absolute top-1/2 left-10 -translate-y-1/2 text-[4rem] uppercase text-gray-600 select-none pr-10">
          Login to see created notes
        </p>
      )}
    </section>
  );
};

export default Homepage;
