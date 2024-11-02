import { render, screen } from "@testing-library/react";
import React from "react";
import JobDetails from "../../../src/components/Job/JobDetails";
import { MemoryRouter } from "react-router";

describe("JobDetails", () => {
  it("renders Job details correctly", () => {
    render(
      <MemoryRouter>
        <JobDetails
          jobData={{
            type: "full-time",
            _id: 2,
            managerid: 2,
            name: "Software Engineer",
            status: "closed",
            location: "San Francisco",
            pay: "120",
            description: "Build and maintain software applications",
            question1: "Years of experience?",
            question2: "Programming languages?",
            question3: "Degree?",
            question4: "Certifications?",
          }}
        />
      </MemoryRouter>
    );
  });

    it("displays job questions correctly", () => {
      render(
        <MemoryRouter>
          <JobDetails
            jobData={{
              type: "internship",
              _id: 3,
              managerid: 3,
              name: "Data Analyst Intern",
              status: "open",
              location: "New York",
              pay: "30",
              description: "Assist in data analysis and reporting",
              question1: "Relevant coursework?",
              question2: "Availability?",
              question3: "Technical skills?",
              question4: "Past internship experience?",
            }}
          />
        </MemoryRouter>
      );
    });
  });
  

describe("JobDetails", () => {
  it("renders JobDetails", () => {
    render(
      <MemoryRouter>
        <JobDetails
          jobData={{
            type: "part-time",
            _id: 1,
            managerid: 1,
            name: "Developer",
            status: "open",
            location: "Raleigh",
            pay: "100",
            description: "Developer",
            question1: "Work experience?",
            question2: "CGPA?",
            question3: "Age?",
            question4: "Skills?",
          }}
        />
      </MemoryRouter>
    );
    // const headline = screen.getByText(/Hello/i);
    // expect(headline).toBeInTheDocument();
  });
});
