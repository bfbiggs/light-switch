import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", async () => {
  const { getByTestId } = render(<App />);
  const elem = getByTestId("switch-button");
  expect(elem.classList[0]).toBe("switch-click");
});
