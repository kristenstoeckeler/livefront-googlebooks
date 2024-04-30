import { useEffect } from 'react'
import { 
    useDispatch,
    useSelector
} from 'react-redux'
import { Link } from "react-router-dom";
import { 
    fetchBooks,
    selectAllBooks,
    selectBook,
} from './BookSlice';

const BookListPage  = () => {
    const dispatch = useDispatch();
    const bookData = useSelector(selectAllBooks);

    useEffect(() => {
        if(bookData?.length===0) {
            dispatch(fetchBooks());
        }
    }, [dispatch, bookData]);

    const handleClick = (e) => {
        dispatch(selectBook(e.volumeInfo))
    }

  return (
    <>
        <header />
        <main className="app">
            <div className="banner">
                <h1 >THE COMPLETE WORKS OF</h1>
                <h1 className="author">N.K. JEMISIN</h1>
            </div>
                    <ul>
                        { bookData?.length > 0 && bookData.map((book, index) => {
                            return(
                                <h2 key={book.id}>
                                    <li>
                                        <img alt="" data-testid={"img"} src={book.volumeInfo.imageLinks.smallThumbnail}/>
                                        <Link 
                                            onClick={handleClick.bind(this, book)}
                                            to={book.volumeInfo.title}
                                            value={book.volumeInfo} 
                                            data-testid={"link"}
                                            >
                                                {book.volumeInfo.title.toUpperCase()}
                                        </Link>
                                    </li>
                                </h2>
                            )      
                        })}
                    </ul>
        </main>
        <footer/>
    </>
  );
}

export default BookListPage;

