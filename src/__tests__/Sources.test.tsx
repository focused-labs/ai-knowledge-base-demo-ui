import * as React from 'react';
import {render} from "@testing-library/react";
import {Sources} from "../components/Sources";

describe(("Sources.tsx"), () => {

    it('should filter out duplicate sources', () => {
        const chat = {
            question: "Who is a software engineer?",
            answer: "bob, fred, ginger",
            isError: false,
            sources: [{
                URL: "www.com",
                title: "a page"
            }, {
                URL: "www.com",
                title: "a page"
            }]
        }
        const wrapper = render(<Sources chat={chat} loading={false}/>)

        const sources = wrapper.getAllByTestId("sources")
        expect(sources.length).toBe(1)
    });

    it('should not filter out if url is not duplicate', () => {
        const chat = {
            question: "Who is a software engineer?",
            answer: "bob, fred, ginger",
            isError: false,
            sources: [{
                URL: "www.com",
                title: "a page"
            }, {
                URL: "www.com.net",
                title: "a page"
            }]
        }
        const wrapper = render(<Sources chat={chat} loading={false}/>)

        const sources = wrapper.getAllByTestId("sources")
        expect(sources.length).toBe(2)
    });

});