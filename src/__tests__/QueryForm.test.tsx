import * as React from 'react';
import {fireEvent, render, waitFor} from "@testing-library/react";
import {QueryForm} from "../components/QueryForm";


describe(("QueryForm.test.tsx"), () => {
    const mockSetInput = jest.fn()
    const mockPersona = "none"
    const mockSetPersona = jest.fn()
    const mockHandleQuery = jest.fn()


    it('when there is text, clicking the enter button does submit a question', async () => {

        const mockFilledInput = "Hello?"

        const queryForm = render(<QueryForm persona={mockPersona}
                                            inputQuery={mockFilledInput}
                                            onPersonaChange={(newPersona: string) => mockSetPersona(newPersona)}
                                            onInputQueryChange={(inputText: string) => mockSetInput(inputText)}
                                            onSubmit={() => mockHandleQuery(mockFilledInput)}
                                            loading={false}
        />)

        const submitButton = queryForm.getByTestId("submit-button")
        await waitFor(() => {
            fireEvent.click(submitButton)
        })

        expect(mockHandleQuery).toBeCalled()

    });

    it('when there is no text, clicking the enter button does not submit an empty question', async () => {

        const mockEmptyInput = ""

        const queryForm = render(<QueryForm persona={mockPersona}
                                            inputQuery={mockEmptyInput}
                                            onPersonaChange={(newPersona: string) => mockSetPersona(newPersona)}
                                            onInputQueryChange={(inputText: string) => mockSetInput(inputText)}
                                            onSubmit={() => mockHandleQuery(mockEmptyInput)}
                                            loading={false}
        />)

        const submitButton = queryForm.getByTestId("submit-button")
        await waitFor(() => {
            fireEvent.click(submitButton)
        })

        expect(mockHandleQuery).not.toBeCalled()
    });

    it('when the response is loading, clicking the enter button does not submit', async () => {

        const mockFilledInput = "Hello?"
        const loading = true

        const queryForm = render(<QueryForm persona={mockPersona}
                                            inputQuery={mockFilledInput}
                                            onPersonaChange={(newPersona: string) => mockSetPersona(newPersona)}
                                            onInputQueryChange={(inputText: string) => mockSetInput(inputText)}
                                            onSubmit={() => mockHandleQuery(mockFilledInput)}
                                            loading={loading}
        />)

        const submitButton = queryForm.getByTestId("submit-button")
        await waitFor(() => {
            fireEvent.click(submitButton)
        })

        expect(mockHandleQuery).not.toBeCalled()
    });

    it('when the response is done loading, clicking the enter button does submit', async () => {

        const mockFilledInput = "Hello?"
        const loading = false

        const queryForm = render(<QueryForm persona={mockPersona}
                                            inputQuery={mockFilledInput}
                                            onPersonaChange={(newPersona: string) => mockSetPersona(newPersona)}
                                            onInputQueryChange={(inputText: string) => mockSetInput(inputText)}
                                            onSubmit={() => mockHandleQuery(mockFilledInput)}
                                            loading={loading}
        />)

        const submitButton = queryForm.getByTestId("submit-button")
        await waitFor(() => {
            fireEvent.click(submitButton)
        })

        expect(mockHandleQuery).toBeCalled()
    });

});