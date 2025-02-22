import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";
import LoginBox from "../components/LoginBox";
import { useLoginCard } from "../contexts/ShowLoginCard";

const Homepage = () => {
  const { showCard, toggleShow } = useLoginCard();

  useEffect(() => {
    if (showCard) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showCard]);

  return (
    <section className="min-h-screen max-h-full relative">
      {/* for the login box */}
      <LoginBox></LoginBox>
      <Navbar />
      {/* note show case section */}
      <div className="px-10 py-10 flex flex-wrap items-center justify-center gap-20">
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </section>
  );
};

export default Homepage;
