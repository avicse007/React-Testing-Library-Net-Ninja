const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Laith",
          last: "Harb",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/59.jpg",
        },
        login: {
          username: "ThePhonyGOAT",
        },
      },
    ],
  },
};

const axiosMock = {
  get11: jest.fn().mockResolvedValue(mockResponse),
  get: () => mockResponse,
};

export default axiosMock;
