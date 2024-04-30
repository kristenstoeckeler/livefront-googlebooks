import reducer, { selectBook } from "./BookSlice"

describe("BookSlice", () => {

    const booksArray = [{
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
    }];

    
    it("should return the initial state", () => {
        expect(reducer(undefined, { type: "" })).toEqual(
            { books: [], selectedBook: ""}
        );
    });

    it("should handle a selected book", () => {
        const previousState = {
            books: booksArray,
            selectedBook: {
                title: 'MockTitle1',
                description: 'MockDescription1', 
                imageLinks: {
                    thumbnail: 'MockImageLinks1' 
            }
            }

        };
        const mockSelectedBook = {
            title: 'MockTitle2',
            description: 'MockDescription2', 
            imageLinks: {
                thumbnail: 'MockImageLinks2' 
            }
        };

        expect(reducer(previousState, selectBook(mockSelectedBook))).toEqual(
            { books: booksArray, selectedBook: mockSelectedBook }
        );
    });
});