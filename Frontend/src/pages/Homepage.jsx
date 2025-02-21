import React from "react";
import Navbar from "../components/Navbar";
import NoteCard from "../components/NoteCard";

const Homepage = () => {
  return (
    <section className="h-full">
      <Navbar />
      {/* note show case section */}
      <div className="px-10 py-10 flex flex-wrap items-center gap-20">
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
