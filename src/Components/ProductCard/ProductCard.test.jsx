/* eslint-disable no-undef */
import ProductCard from "./ProductCard";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

const addToBagMock = vi.fn().mockResolvedValue("added");

vi.mock("react-router-dom", () => ({
   ...vi.importActual("react-router-dom"),
   useOutletContext: () => {
      return {
         addToBag: addToBagMock,
      };
   },
}));

const product = {
   image: "https://placeholder.pics/svg/300",
   title: "product#1",
   description: "product#1 desc",
   price: 3,
   id: 1,
};

describe("product card tests", () => {
   it("renders the product info shows up", async () => {
      render(<ProductCard {...product} />);

      expect(screen.queryByText(product.title)).not.toBe(null);
      expect(screen.queryByText(product.description)).not.toBe(null);
      expect(screen.queryByText("$" + product.price)).not.toBe(null);
      expect(screen.queryByAltText(product.title)).not.toBe(null);
   });

   it("Increments and decrements the product count", async () => {
      const user = userEvent.setup();

      render(<ProductCard {...product} />);
      const incrementBtn = screen.getByRole("button", { name: "increment" });
      const decrementBtn = screen.getByRole("button", { name: "decrement" });

      expect(screen.getByDisplayValue(0)).toBeInTheDocument();

      await user.click(incrementBtn);
      await user.click(incrementBtn);

      expect(screen.getByDisplayValue(2)).toBeInTheDocument();

      await user.click(decrementBtn);

      expect(screen.getByDisplayValue(1)).toBeInTheDocument();
   });

   it("resets display value after adding to bag", async () => {
      const user = userEvent.setup();

      render(<ProductCard {...product} />);
      const incrementBtn = screen.getByRole("button", { name: "increment" });
      const addToBagBtn = screen.getByRole("button", { name: /add to bag/i });

      await user.click(incrementBtn);

      expect(screen.getByDisplayValue(1)).toBeInTheDocument();

      await user.click(addToBagBtn);

      expect(addToBagMock).toHaveBeenCalledTimes(1);
      expect(screen.getByDisplayValue(0)).toBeInTheDocument();
   });
});
