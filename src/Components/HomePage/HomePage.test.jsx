import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Home page tests", () => {
   it("Link renders", () => {
      render(<HomePage />);

      expect(screen.queryByRole("link").textContent).toBe("Shop");
   });
});
