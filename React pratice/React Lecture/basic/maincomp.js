import React from "react";
import Library from "./Library";

function MainComp() {
  let bookList = [
    { author: "chinna", bookId: 1, bookName: "HTML Basics", bookPrice: "500" },
    { author: "chinna", bookId: 2, bookName: "CSS Basics", bookPrice: "2500" },
    {
      author: "chinna",
      bookId: 3,
      bookName: "Javasript Basics",
      bookPrice: "3500",
    },
    {
      author: "chinna",
      bookId: 4,
      bookName: "Bootstrap Basics",
      bookPrice: "4500",
    },
    {
      author: "chinna",
      bookId: 5,
      bookName: "React Basics",
      bookPrice: "5500",
    },
  ];
  return <Library books={bookList} />;
}

export default MainComp;
