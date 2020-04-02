import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Rule from "../Rule";
import rules from "../data.json";

describe("Rule", () => {
    let rule;
    let wrapper;
  
    beforeEach(() => {
      rule = rules[0];
      wrapper = render(<Rule rule={rule} />);
    });
  
    afterEach(cleanup);
  
    // Find by element text content
    it("should render rule title", () => {
      const titleElement = wrapper.getByText(rule.title);
      expect(titleElement).toBeInTheDocument();
    });
  
    // Find by title attribute
    it("should render rule likes", () => {
      const likesElement = wrapper.getByTitle("+1");
      expect(likesElement).toHaveTextContent(rule.likes);
    });
    
        // Callback fires on button click
    it("should render rule description", () => {
        const descriptionElement = wrapper.getByText(rule.description);
        expect(descriptionElement).toBeInTheDocument();
        
    });
  });