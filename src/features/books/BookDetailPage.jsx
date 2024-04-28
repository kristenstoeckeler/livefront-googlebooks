import { useSelector } from 'react-redux';
import { selectedBook } from './BookSlice';

const BookDetail = () => {
    const selectBook = useSelector(selectedBook);
  return(
    <>
        <div>
            <h2>Book Detail</h2>
        </div>
    </>
)};

export default BookDetail;
