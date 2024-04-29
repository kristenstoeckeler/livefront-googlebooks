import { useSelector } from 'react-redux';
import { selectedBook } from './BookSlice';

const BookDetail = () => {
    const selectBook = useSelector(selectedBook);
    const { title, description, imageLinks }  = selectBook;

  return(
    <>
        <h3>{title}</h3>
        <p>{description}</p>
        <img alt="" src={imageLinks.thumbnail}/>
    </>
)};

export default BookDetail;
