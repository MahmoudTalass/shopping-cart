/* eslint-disable no-undef */
import BagPage from "./BagPage";
import { render, screen } from "@testing-library/react";
import { useOutletContext } from "react-router-dom";

vi.mock("react-router-dom");
vi.mock("../ProductCardInBag/ProductCardInBag", () => ({
   default: ({ image, title, price, quantity }) => (
      <article>
         <img src={image} alt={title} />
         <p>{title}</p>
         <p>{price}</p>
         <p>{quantity}</p>
      </article>
   ),
}));

describe("BagPage component tests", () => {
   it("render bag items", () => {
      const mockBag = {
         1: {
            image: "https://placeholder.pics/svg/300",
            title: "product#1",
            description: "product#1 desc",
            price: 3,
            id: 1,
            quantity: 2,
         },
         2: {
            image: "https://placeholder.pics/svg/300",
            title: "product#2",
            description: "product#2 desc",
            price: 50,
            id: 2,
            quantity: 3,
         },
         3: {
            image: "https://placeholder.pics/svg/300",
            title: "product#3",
            description: "product#3 desc",
            price: 10,
            id: 3,
            quantity: 1,
         },
      };
      useOutletContext.mockImplementationOnce(() => {
         return {
            clearBag: () => "cleared",
            bag: mockBag,
         };
      });

      render(<BagPage />);

      expect(screen.getAllByRole("article").length).toBe(3);
   });

   it("display total and checkout button", () => {
      const mockBag = {
         3: {
            image: "https://placeholder.pics/svg/300",
            title: "product#3",
            description: "product#3 desc",
            price: 10,
            id: 3,
            quantity: 1,
         },
      };

      useOutletContext.mockImplementationOnce(() => {
         return {
            clearBag: () => "cleared",
            bag: mockBag,
         };
      });

      render(<BagPage />);

      const total = Object.keys(mockBag).reduce((accumulator, key) => {
         return accumulator + mockBag[key].quantity * mockBag[key].price;
      }, 0);

      expect(screen.getByText(`Total: $${total}`)).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /checkout/i })).toBeInTheDocument();
   });

   it("render empty bag", () => {
      useOutletContext.mockImplementationOnce(() => {
         return {
            clearBag: () => "cleared",
            bag: {},
         };
      });
      render(<BagPage />);

      expect(screen.getByText(/your bag is empty!/i)).toBeInTheDocument();
   });
});
