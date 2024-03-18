/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("Home page tests", () => {
   it("Ship Link renders", () => {
      render(
         <MemoryRouter>
            <HomePage />
         </MemoryRouter>
      );

      expect(screen.queryByRole("link").textContent).toBe("Shop");
   });
   it("Ship Link renders", () => {
      render(
         <MemoryRouter>
            <HomePage />
         </MemoryRouter>
      );

      expect(screen.queryByAltText("jewelry")).not.toBe(null);
   });
});
