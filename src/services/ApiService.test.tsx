import React from 'react';
import fetch from 'jest-fetch-mock';
import { sendQuery } from './ApiService';

describe('apiService', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  jest.mock('fetch');

  // TODO this test doesn't pass
  it('getMenuList calls the proper url given a store ID', async () => {

    fetch.mockResponseOnce(
        JSON.stringify({ response: "You asked: What is the meaning of life?" })
    )

    const response = await sendQuery("What is the meaning of life?");

    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toMatch(/\/query\/$/);
  });

});
