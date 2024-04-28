import { useSelector } from 'react-redux'
import { 
    selectAllBooks,
} from './BookSlice';

const BookList  = () => {
  const bookData = useSelector(selectAllBooks);

  console.log('Bookdata', bookData);
  return (
    <>
        <main>
            <h1>BookList</h1>
        </main>
    </>
  );
}

export default BookList;

