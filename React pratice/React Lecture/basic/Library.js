import React from "react";

function Library(props) {
  console.log(props);
  return (
    <div className="grid">
      {Object.keys(props.books[0]).map((heading) => (
        <b>{heading} </b>
      ))}

      {props.books.map((book) => {
        console.log(book);
        // return <div>{book.bookId} {book.bookName} {book.bookPrice}</div>
        return Object.values(book).map((bookDetails) => {
          return <span>{bookDetails} </span>;
        });
      })}
    </div>
  );
}

export default Library;
