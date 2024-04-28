import {
    Routes,
    Route
} from 'react-router-dom';

import BookDetail from './features/books/BookDetailPage';
import BookList from './features/books/BookListPage';

const AppRoutes = () => {
    return(
            <Routes>
                <Route exact path={'/'} element={<BookList/>}/>
                <Route exact path={'/:book'} element={<BookDetail/>}/>
            </Routes>

    )
}

export default AppRoutes;
