/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import ShopPage from "./ShopPage";

const products = [
   {
      image: "https://placeholder.pics/svg/300",
      title: "product#1",
      description: "product#1 desc",
      price: 3,
      id: 1,
   },
   {
      image: "https://placeholder.pics/svg/300",
      title: "product#2",
      description: "product#2 desc",
      price: 50,
      id: 2,
   },
   {
      image: "https://placeholder.pics/svg/300",
      title: "product#3",
      description: "product#3 desc",
      price: 10,
      id: 3,
   },
];
vi.mock("react-router-dom", () => ({
   ...vi.importActual("react-router-dom"),
   useOutletContext: () => {
      return {
         addToBag: () => "added",
      };
   },
}));

describe("ShopPage component tests involving fetch", () => {
   it("render all product cards", async () => {
      global.fetch = vi.fn().mockImplementationOnce(() =>
         Promise.resolve({
            json: () => Promise.resolve(products),
            ok: true,
         })
      );
      render(<ShopPage />);

      expect(global.fetch).toHaveBeenCalled();

      expect((await screen.findAllByRole("article")).length).toBe(3);
   });

   it("network error occurs", async () => {
      global.fetch = vi.fn().mockImplementationOnce(() =>
         Promise.resolve({
            ok: false,
            statusText: "Not Found",
         })
      );
      render(<ShopPage />);

      expect(global.fetch).toHaveBeenCalled();

      expect((await screen.findByRole("heading")).textContent).toMatch(
         /network error occured not found/i
      );
   });

   afterEach(() => {
      vi.clearAllMocks();
   });
});
