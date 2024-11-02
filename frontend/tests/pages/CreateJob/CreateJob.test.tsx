import { render, screen } from "@testing-library/react";
import React from "react";
import CreateJob from "../../../src/Pages/CreateJob/CreateJob";
import { MemoryRouter } from "react-router";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

describe("CreateJob", () => {
  it("renders CreateJob", () => {
    render(
      <MemoryRouter>
        <CreateJob />
      </MemoryRouter>
    );
    // const headline = screen.getByText(/Hello/i);
    // expect(headline).toBeInTheDocument();
  });
});


describe("CreateJob", () => {
  beforeEach(() => {
    // Clear prior mocks and configurations
    mock.reset();
  });

  test("Renders CreateJob form correctly", () => {
    render(
      <MemoryRouter>
        <CreateJob />
      </MemoryRouter>
    );

  });

  test("Submits the form with valid job details", async () => {
    // Mock successful API response for job creation
    mock.onPost("http://localhost:8000").reply(200, {
      message: "Job created successfully",
    });

    render(
      <MemoryRouter>
        <CreateJob />
      </MemoryRouter>
    );
  });
});
