import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
      fetch.resetMocks();
  });
  test('Llmar una API y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({data: '12345'}));

    getData('https://google.com')
    .then((response) => {
        expected(response.data).toEqual('12345');
    });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});