import { useSelector } from 'react-redux';
import { selectedBook } from './BookSlice';

const BookDetail = () => {
    const selectBook = useSelector(selectedBook);
    console.log('selectBook', selectBook);

  return(
    <>
        <div>
            <h2>Book Detail</h2>
        </div>
    </>
)};

export default BookDetail;
