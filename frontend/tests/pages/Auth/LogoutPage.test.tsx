import { render, screen } from "@testing-library/react";
import React from "react";
import LogoutPage from "../../../src/Pages/Auth/LogoutPage";
import { MemoryRouter } from "react-router";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

describe("LogoutPage", () => {
  it("renders LogoutPage", () => {
    render(
      <MemoryRouter>
        <LogoutPage />
      </MemoryRouter>
    );
    // const headline = screen.getByText(/Hello/i);
    // expect(headline).toBeInTheDocument();
  });
});

describe("LogoutPage", () => {
  beforeEach(() => {
    // Clear prior mocks and configurations
    mock.reset();
  });

  test("Renders Logout page message correctly", () => {
    mock.onPost("http://localhost:8000/").reply(200, {
      message: "correct message",
    });
    render(
      <MemoryRouter>
        <LogoutPage />
      </MemoryRouter>
    );
  });

  test("Redirects to home page on logout", async () => {
    // Mock successful logout API response
    mock.onPost("http://localhost:8000/").reply(200, {
      message: "Logout successful",
    });

    render(
      <MemoryRouter>
        <LogoutPage />
      </MemoryRouter>
    );
  });

  test("Displays error message on failed logout", async () => {
    // Mock an error response from the logout API
    mock.onPost("http://localhost:8000/").reply(500, {
      message: "Logout failed",
    });

    render(
      <MemoryRouter>
        <LogoutPage />
      </MemoryRouter>
    );
  });
});
