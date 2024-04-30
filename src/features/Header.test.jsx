import { render, screen } from '@testing-library/react'
import Header from './Header';

describe("BookDetail component", () => {
    it("should render Header component", () => {
        render(<Header />);
        const title = screen.getByText("THE COMPLETE WORKS OF")
        const title2 = screen.getByText("N.K. JEMISIN")
        expect(title).toBeInTheDocument();
        expect(title2).toBeInTheDocument();
  });
});