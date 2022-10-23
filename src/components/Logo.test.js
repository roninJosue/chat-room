import {render, screen} from "@testing-library/react";
import Logo from "./Logo";

describe('Logo', () => {
  it('should render appropriately', function () {
    render(<Logo />)
    expect(screen.getByText(/chat/i)).toBeInTheDocument()
  });
});