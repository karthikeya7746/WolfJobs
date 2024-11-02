import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Profile from "../../../src/Pages/Profile/Profile";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
const mock = new MockAdapter(axios);

describe("Profile", () => {
  it("renders Profile", () => {
    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );
  });
});

test("Request for profile information", async () => {
  // Mock successful API response for profile information
  mock.onGet("http://localhost:8000/users/profile").reply(200, {
    name: "Bharadwaj Katna",
    email: "bittuk@gmail.com",
    unityid: "bkatna",
    studentid: "123456",
    role: "Student",
    skills: "React, Node.js",
  });
});
test("Request for profile information", async () => {
  // Mock successful API response for profile information
  mock.onGet("http://localhost:8000/users/profile").reply(200, {
    name: "Bharadwaj",
    email: "bittukatna@gmail.com",
    unityid: "bkatna2",
    studentid: "123456",
    role: "Student",
    skills:  "Node.js",
});
});
test("Request for profile information", async () => {
  // Mock successful API response for profile information
  mock.onGet("http://localhost:8000/users/profile").reply(200, {
    name: "Bharadwaj K",
    email: "bkatna@ncsu.edu",
    unityid: "bkatna2",
    studentid: "123456",
    role: "Student",
    skills:  "Node.js",
});
});
test("Request for profile information", async () => {
  // Mock successful API response for profile information
  mock.onGet("http://localhost:8000/users/profile").reply(200, {
    name: "Bharadwaj K",
    email: "bkatna@ncsu.edu",
    role: "Manager",
});
});
test("Request for profile information", async () => {
  // Mock successful API response for profile information
  mock.onGet("http://localhost:8000/users/profile").reply(200, {
    name: "Bharadwaj K",
    email: "bkatna@ncsu.edu",
    role: "Manager",
});
});
test("Request for profile information", async () => {
  // Mock successful API response for profile information
  mock.onGet("http://localhost:8000/users/profile").reply(200, {
    name: "Bharadwaj K",
    email: "bkatna@ncsu.edu",
    role: "Manager",
});
});


