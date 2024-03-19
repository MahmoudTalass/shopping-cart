/* eslint-disable no-undef */
import ProductCardInBag from "./ProductCardInBag";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const product = {
   image: "https://placeholder.pics/svg/150",
   title: "product#1",
   price: 3,
   id: 1,
   quantity: 3,
};

const updateProductQuantityMock = vi.fn((incrementVal) => (product.quantity += incrementVal));

vi.mock("react-router-dom", () => ({
   ...vi.importActual("react-router-dom"),
   useOutletContext: () => {
      return {
         updateProductQuantity: updateProductQuantityMock,
      };
   },
}));

describe("ProductCardInBag component tests", () => {
   it("renders the product info shows up", async () => {
      render(<ProductCardInBag {...product} />);
      ProductCardInBag;

      expect(screen.queryByText(product.title)).toBeInTheDocument();
      expect(screen.queryByText("quantity: " + product.quantity)).toBeInTheDocument();
      expect(screen.queryByText("Price: $" + product.price)).toBeInTheDocument();
      expect(screen.queryByAltText(product.title)).toBeInTheDocument();
   });

   it("Increments and decrements the product count", async () => {
      const user = userEvent.setup();

      render(<ProductCardInBag {...product} />);
      const incrementBtn = screen.getByRole("button", { name: "increment" });
      const decrementBtn = screen.getByRole("button", { name: "decrement" });

      expect(screen.getByText("quantity: 3")).toBeInTheDocument();

      await user.click(incrementBtn);
      await user.click(incrementBtn);

      expect(screen.getByText("quantity: 5")).toBeInTheDocument();

      await user.click(decrementBtn);

      expect(screen.getByText("quantity: 4")).toBeInTheDocument();
   });

   it("update product quantity", async () => {
      const user = userEvent.setup();

      render(<ProductCardInBag {...product} />);
      const incrementBtn = screen.getByRole("button", { name: "increment" });

      expect(screen.getByText("quantity: 3")).toBeInTheDocument();

      await user.click(incrementBtn);

      expect(screen.getByText("quantity: 4")).toBeInTheDocument();

      const updateCountBtn = screen.getByRole("button", { name: /submit change/i });

      await user.click(updateCountBtn);

      expect(screen.queryByText(/submit changes/i)).toBe(null);
   });
});
