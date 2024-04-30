import { useSelector } from 'react-redux';
import { selectedBook } from './BookSlice';
import Header from '../Header';

const BookDetail = () => {
    const selectBook = useSelector(selectedBook);
    const { title, description, imageLinks } = selectBook;

  return(
    <>
        <Header />
        <div className="page">
          { selectBook.title && (
            <>
              <div className="desc">
                <h1 className="title" data-testid="title">{title.toUpperCase()}</h1>
                <div className="box">
                    <img className="image" alt="" data-testid="img" src={imageLinks.thumbnail}/>
                    <p data-testid="desc">{description}</p>
                </div>
              </div>
            </>
          )};
          <footer/>
        </div>
    </>
    );
};

export default BookDetail;
