import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";
import "./index.css";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [currentBookId, setCurrentBookId] = useState(null);
  const [books, setBooks] = useState([
    {
      bookTitle: "Dune",
      bookAuthor: "Frank Herbert",
      bookIsbn: "9780340960196",
      bookId: uuidv4(),
    },
  ]);

  return (
    <div className="App">
      <div className="container">
        <Form
        title={title}
        setTitle={setTitle}
        author={author}
        setAuthor={setAuthor}
        isbn={isbn}
        setIsbn={setIsbn}
        currentBookId={currentBookId}
        />
      </div>
    </div>
  );
}

export default App;


/*
What state to handle:
1. title
2. author
3. isbn
4. handle current book id when editing
5. array to store books

*/