import { render as rtlRender, screen } from '@testing-library/react'
import configureStore from 'redux-mock-store';
import { Provider, useSelector } from 'react-redux';
import BookDetail from "./BookDetailPage";
import booksReducer from '../books/BookSlice';



jest.mock("react-redux", () => ({
 ...jest.requireActual("react-redux"),
 useSelector: jest.fn(),
}));

const mockStore = configureStore({reducer: booksReducer});
const store = mockStore({
        booksReducer,
    });

const render = component => rtlRender(
    <Provider store={store}>
        { component }
    </Provider>
);

describe("BookDetail component", () => {

    const mockAppState = {
        booksReducer: {
            books: [],
            selectedBook: {
                title: 'MockTitle',
                description: 'MockDescription', 
                imageLinks: {
                    thumbnail: 'MockImageLinks' 
                }
            }

        }
    };

    const mockEmptyState  = {
        booksReducer: {
            books: [],
            selectedBook: {}
        }
    };

    beforeEach(() => {
        useSelector.mockClear();  
    });


    it("should render BookDetail component", () => {
    useSelector.mockImplementation(callback => {
            return callback(mockAppState);
        });
    render(<BookDetail />);
    const title = screen.getByTestId("title");
    const desc = screen.getByTestId("desc");
    const imageLinks = screen.getByTestId("img");
    expect(title).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
    expect(imageLinks).toBeInTheDocument();
  });

    it("should not render if no selected book ", () => {
    useSelector.mockImplementation(callback => {
            return callback(mockEmptyState);
        });
    render(<BookDetail />);
    const title = screen.queryByTestId("title");
    const desc = screen.queryByTestId("desc");
    const imageLinks = screen.queryByTestId("img");
    expect(title).toBeNull();
    expect(desc).toBeNull();
    expect(imageLinks).toBeNull();
  });
});