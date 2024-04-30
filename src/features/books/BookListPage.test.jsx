import * as React from 'react';
import { render as rtlRender, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom'
import { Provider, useDispatch, useSelector } from 'react-redux';
import BookList from "./BookListPage";
import booksReducer from '../books/BookSlice';

jest.mock("react-redux", () => ({
 ...jest.requireActual("react-redux"),
 useSelector: jest.fn(),
 useDispatch: jest.fn(),
}));

const mockStore = configureStore({reducer: booksReducer});
const store = mockStore({
        booksReducer,
});

const render = component => rtlRender(
    <Provider store={store}>
        <BrowserRouter>
            { component }
        </BrowserRouter>
    </Provider>
);

describe("BookList component", () => {
    const mockAppState = {
        booksReducer: {
            books: [{
                volumeInfo: {
                    title: 'MockTitle',
                    description: 'MockDescription', 
                    imageLinks: {
                    thumbnail: 'MockImageLinks' 
                    }
                }
            },
            {
                volumeInfo: {
                    title: 'MockTitle2',
                    description: 'MockDescription2', 
                    imageLinks: {
                        thumbnail: 'MockImageLinks2' 
                    }
                }   
            }],
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
        useDispatch.mockClear()
    });

    it("should render BookList component", () => {
        useSelector.mockImplementation(callback => {
                return callback(mockAppState);
            });
        render(<BookList />);
        const title = screen.getByText("THE COMPLETE WORKS OF")
        const title2 = screen.getByText("N.K. JEMISIN")
        const links = screen.getAllByTestId("link");
        const imgs = screen.getAllByTestId("img");

        expect(title).toBeInTheDocument();
        expect(title2).toBeInTheDocument();

        links.forEach((link) =>{
            expect(link).toBeInTheDocument();
        });
        imgs.forEach((img) =>{
            expect(img).toBeInTheDocument();
        });

        userEvent.click(links[0]);
        expect(links[0]).toHaveAttribute('href', `/${mockAppState.booksReducer.books[0].volumeInfo.title}`)
    });
    
    it("should not render list if no books ", () => {
        const mockDispatch = jest.fn()
        useDispatch.mockReturnValue(mockDispatch) 
        useSelector.mockImplementation(callback => {
                return callback(mockEmptyState);
            });
        render(<BookList />);
        
        const title = screen.getByText("THE COMPLETE WORKS OF");
        const title2 = screen.getByText("N.K. JEMISIN")
        const link = screen.queryByTestId("link");
        const img = screen.queryByTestId("img");
        expect(title).toBeInTheDocument();
        expect(title2).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(link).toBeNull();
        expect(img).toBeNull();
    });
});