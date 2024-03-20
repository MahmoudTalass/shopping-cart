/* eslint-disable no-undef */
import BagPage from "./BagPage";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

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

vi.mock("react-router-dom", async (importActual) => {
   const actual = await importActual();
   return {
      ...actual,
      useOutletContext: () => {
         return {
            clearBag: () => "cleared",
            bag: mockBag,
         };
      },
   };
});

let total = Object.keys(mockBag).reduce((accumulator, key) => {
   return accumulator + mockBag[key].quantity * mockBag[key].price;
}, 0);

describe("BagPage component tests", () => {
   it("render bag items", () => {
      render(
         <MemoryRouter>
            <BagPage />
         </MemoryRouter>
      );

      expect(screen.getAllByRole("article").length).toBe(3);
   });

   it("display total and checkout button", () => {
      render(
         <MemoryRouter>
            <BagPage />
         </MemoryRouter>
      );

      expect(screen.getByText(`Total: $${total}`)).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /checkout/i })).toBeInTheDocument();
   });
});
