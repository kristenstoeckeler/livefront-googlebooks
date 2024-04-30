import { useSelector } from 'react-redux';
import { selectedBook } from './BookSlice';

const BookDetail = () => {
    const selectBook = useSelector(selectedBook);
    const { title, description, imageLinks } = selectBook;

  return(
        <>
        <body>
          <header />
          { selectBook.title && (
            <div className="detail">
              <h1 className="title" data-testid="title">{title.toUpperCase()}</h1>
              <div className="desc">
                <img className="image" alt="" data-testid="img" src={imageLinks.thumbnail}/>
                <p data-testid="desc">{description}</p>
              </div>
            </div>
          )};
          <footer/>

        </body>
          
        </>

    );
};

export default BookDetail;
