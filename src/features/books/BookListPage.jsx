import {
    useEffect,
    useState
} from 'react'
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
    const [isLoading, setIsLoading] = useState(false);
    const bookData = useSelector(selectAllBooks);

    useEffect(() => {
        if(bookData.length===0) {
            setIsLoading(true);
            dispatch(fetchBooks());
        }
        setIsLoading(false);
    }, [dispatch, bookData]);

    const handleClick = (e) => {
        dispatch(selectBook(e.volumeInfo))
    }
    
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <h1>N.K. Jemisin's Complete Works</h1>
            {isLoading ? (
                <p>Loading ...</p>
                ) : (
                    <ul>
                        { bookData.length > 0 && bookData.map((book, index) => {
                            return(
                                <>
                                    <h2 key={index}>
                                        <li>
                                            <img alt="" src={book.volumeInfo.imageLinks.smallThumbnail}/>
                                            <Link 
                                                onClick={handleClick.bind(this, book)}
                                                to={book.volumeInfo.title}
                                                value={book.volumeInfo} 
                                                >
                                                    {book.volumeInfo.title}
                                            </Link>
                                        </li>
                                    </h2>

                                </>
                            )      
                        })}
                    </ul>
            )}
        </div>
    </main>
    </>
  );
}

export default BookListPage;

