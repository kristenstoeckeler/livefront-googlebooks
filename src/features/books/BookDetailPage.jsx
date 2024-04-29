import { useSelector } from 'react-redux';
import { selectedBook } from './BookSlice';

const BookDetail = () => {
    const selectBook = useSelector(selectedBook);
    const { title, description, imageLinks } = selectBook;

  return(
        <>
          { selectBook.title && (
            <div>
              <h3 data-testid="title">{title}</h3>
              <p data-testid="desc">{description}</p>
              {imageLinks && (<img alt="" data-testid="image-links" src={imageLinks.thumbnail}/>)}
            </div>
          )};
        </>

    );
};

export default BookDetail;
