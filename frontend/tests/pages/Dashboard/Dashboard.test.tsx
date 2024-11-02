import { render, screen } from "@testing-library/react";
import React from "react";
import Dashboard from "../../../src/Pages/Dashboard/Dashboard";
import { MemoryRouter } from "react-router";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

describe("Dashboard", () => {
  beforeEach(() => {
    // Clear prior mocks and configurations
    mock.reset();
  });

  test("Request for users by jobs", async () => {
    mock.onGet("http://localhost:8000/api/v1/users").reply(200, {
      jobs: [
        { _id: "1", title: "Job 1" },
        { _id: "2", title: "Job 2" },
      ],
    });
    <MemoryRouter>
      render(
      <Dashboard />
      );
    </MemoryRouter>;
  });
  test("Request for applications", async () => {
    // Mock successful API response for fetching applications
    mock
      .onGet("http://localhost:8000/api/v1/users/fetchapplications")
      .reply(200, {
        application: [{ _id: "1", jobid: "123", status: "applied" }],
      });

    <MemoryRouter>
      render(
      <Dashboard />
      );
    </MemoryRouter>;
  });
  test("Request for applications", async () => {
    // Mock successful API response for fetching applications
    mock
      .onGet("http://localhost:8000/api/v1/users/fetchapplications")
      .reply(200, {
        application: [{ _id: "2", jobid: "123", status: "in review" }],
      });

    <MemoryRouter>
      render(
      <Dashboard />
      );
    </MemoryRouter>;
  });
  test("Request for applications", async () => {
    // Mock successful API response for fetching applications
    mock
      .onGet("http://localhost:8000/api/v1/users/fetchapplications")
      .reply(200, {
        application: [{ _id: "3", jobid: "123", status: "rejected" }],
      });

    <MemoryRouter>
      render(
      <Dashboard />
      );
    </MemoryRouter>;
  });
  test("Request for applications", async () => {
    // Mock successful API response for fetching applications
    mock
      .onGet("http://localhost:8000/api/v1/users/fetchapplications")
      .reply(200, {
        application: [{ _id: "67214e08dcb09ab4db642380", jobid: "671994557011a93fba149585", status: "screening", applicantskills: "Software Enginnering" }],
      });

    <MemoryRouter>
      render(
      <Dashboard />
      );
    </MemoryRouter>;
  });
});
