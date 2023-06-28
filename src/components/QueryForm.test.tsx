import {render, screen} from "@testing-library/react";
import React from "react";
import {QueryForm} from "./QueryForm";

describe('the query form', () => {

    it('renders an input element', async () => {
        render(<QueryForm />);
        const textElement = screen.getByText(/what do you want to know?/i);
        expect(textElement).toBeInTheDocument();
    });

});
