import { sendQuery } from '../services/ApiService';

describe('API Service calls', () => {
  it('calls the proper url given a query body', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ response: 'The meaning of life is 42.' })
      })
    ) as jest.Mock;

    const response = await sendQuery('What is the meaning of life?', 'abcd');

    expect(global.fetch).toHaveBeenCalled();
    expect(response).toEqual({ response: 'The meaning of life is 42.' });
  });
});
