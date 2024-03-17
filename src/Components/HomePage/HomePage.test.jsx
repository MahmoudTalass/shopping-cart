/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { BrowserRouter } from "react-router-dom";

describe("Home page tests", () => {
   it("Ship Link renders", () => {
      render(
         <BrowserRouter>
            <HomePage />
         </BrowserRouter>
      );

      expect(screen.queryByRole("link").textContent).toBe("Shop");
   });
   it("Ship Link renders", () => {
      render(
         <BrowserRouter>
            <HomePage />
         </BrowserRouter>
      );

      expect(screen.queryByAltText("jewelry")).not.toBe(null);
   });
});
