import * as React from 'react';
import {render} from '@testing-library/react';
import {Chat} from '../components/Chat';
import {IChat} from '../App';

describe(('Chat.test.tsx'), () => {

    it('only displays error message when theres an error', () => {

        const chat: IChat = {
            question: 'when does the sun rise?',
            answer: 'hmm... idk',
            sources: [],
            isError: true,
        }

        const wrapper = render(<Chat chat={chat} loading={false}></Chat>)

        wrapper.getByText('Something went wrong. Please refresh the page and try again.')

    });

    it('does not display error message if no error', async () => {

        const chat: IChat = {
            question: 'when does the sun rise?',
            answer: 'hmm... idk',
            sources: [],
            isError: false,
        }

        const wrapper = render(<Chat chat={chat} loading={false}></Chat>)

        expect(wrapper.queryByText('Something went wrong. Please refresh the page and try again.')).toBeNull()

    });


});