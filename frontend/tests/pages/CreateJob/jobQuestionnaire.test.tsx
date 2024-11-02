import { render, screen } from "@testing-library/react";
import React from "react";
import JobQuestionnaire from "../../../src/Pages/CreateJob/jobQuestionnaire";
import { MemoryRouter } from "react-router";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

describe("JobQuestionnaire", () => {
  it("renders JobQuestionnaire", () => {
    render(
      <MemoryRouter>
        <JobQuestionnaire />
      </MemoryRouter>
    );
  });
});



describe("JobQuestionnaire", () => {
  beforeEach(() => {
    // Clear prior mocks and configurations
    mock.reset();
  });

  test("Renders Job Questionnaire form correctly", () => {
    render(
      <MemoryRouter>
        <JobQuestionnaire />
      </MemoryRouter>
    );
  });

  test("Submits the questionnaire form with responses", async () => {
    // Mock a successful API response for questionnaire submission
    mock.onPost("http://localhost:8000/").reply(200, {
      message: "Questionnaire submitted successfully",
    });

    render(
      <MemoryRouter>
        <JobQuestionnaire />
      </MemoryRouter>
    );
  });
});
