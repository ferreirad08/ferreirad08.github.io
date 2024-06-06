class Event {
  #event = false;

  set() {
    this.#event = true;
  }

  clear() {
    this.#event = false;
  }

  is_set() {
    return this.#event;
  }

  wait(timeout = 1000) {
    const start = Date.now();
    while (!this.#event && Date.now() - start < timeout) {
      // pass
    }
    return this.#event;
  }
}

const requests = {
  codes: {
    HTTP_200_OK: 200,
    HTTP_201_CREATED: 201,
    HTTP_400_BAD_REQUEST: 400,
    HTTP_403_FORBIDDEN: 403,
    HTTP_404_NOT_FOUND: 404,
    HTTP_422_UNPROCESSABLE_ENTITY: 422,
    HTTP_500_INTERNAL_SERVER_ERROR: 500,
  },
  headers: {
    mode: "no-cors",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  async post(url, json) {
    return await fetch(url, {
      method: "POST",
      headers: requests.headers,
      body: JSON.stringify(json),
    });
  },
  async get(url) {
    return await fetch(url);
  },
  async put(url, json) {
    return await fetch(url, {
      method: "PUT",
      headers: requests.headers,
      body: JSON.stringify(json),
    });
  },
};

class Event {
  #event = false;

  set() {
    this.#event = true;
  }

  clear() {
    this.#event = false;
  }

  is_set() {
    return this.#event;
  }

  wait(timeout = 1000) {
    const start = Date.now();
    while (!this.#event && Date.now() - start < timeout) {
      // pass
    }
    return this.#event;
  }
}

const requests = {
  codes: {
    HTTP_200_OK: 200,
    HTTP_201_CREATED: 201,
    HTTP_400_BAD_REQUEST: 400,
    HTTP_403_FORBIDDEN: 403,
    HTTP_404_NOT_FOUND: 404,
    HTTP_422_UNPROCESSABLE_ENTITY: 422,
    HTTP_500_INTERNAL_SERVER_ERROR: 500,
  },
  headers: {
    mode: "no-cors",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  async post(url, json) {
    return await fetch(url, {
      method: "POST",
      headers: requests.headers,
      body: JSON.stringify(json),
    });
  },
  async get(url) {
    return await fetch(url);
  },
  async put(url, json) {
    return await fetch(url, {
      method: "PUT",
      headers: requests.headers,
      body: JSON.stringify(json),
    });
  },
};

const scenarios = [
  // Y list
  [[1, 6], [4], [2]],
  [[1, 8], [4], [0]],
  [[2, 3], [4], [6]],
  [[3, 8], [4], [0]],
  [[0, 5], [4], [8]],
  [[5, 6], [4], [2]],
  [[0, 7], [4], [8]],
  [[2, 7], [4], [6]],

  // diagonals
  [[4, 8], [0], [2, 6]],
  [[0, 8], [4], [1, 3, 5, 7]],
  [[0, 4], [8], [2, 6]],
  [[4, 6], [2], [0, 8]],
  [[2, 6], [4], [1, 3, 5, 7]],
  [[2, 4], [6], [0, 8]],

  // V attack
  [[5], [0], [6]],
  [[3], [2], [8]],
  [[1], [6], [8]],
  [[1], [8], [6]],
  [[7], [0], [2]],
  [[7], [2], [0]],
  [[5], [6], [0]],
  [[3], [8], [2]],

  // Vizinho lados
  [[1], [0], [4]],
  [[1], [2], [4]],
  [[3], [6], [4]],
  [[5], [8], [4]],
  [[3], [0], [4]],
  [[5], [2], [4]],
  [[7], [6], [4]],
  [[7], [8], [4]],
  [[0, 5], [4, 8], [6]],
  [[0, 7], [4, 8], [2]],
  [[2, 3], [4, 6], [8]],
  [[2, 7], [4, 6], [0]],
  [[6, 1], [4, 2], [8]],
  [[6, 5], [4, 2], [0]],
  [[8, 1], [4, 0], [6]],
  [[8, 3], [4, 0], [2]],

  // Mais aberto
  [[2], [0], [8]],
  [[6], [0], [8]],
  [[0], [2], [6]],
  [[8], [2], [6]],
  [[0], [6], [2]],
  [[8], [6], [2]],
  [[2], [8], [0]],
  [[6], [8], [0]],

  // Opostos
  [[8], [0], [2, 6]],
  [[6], [2], [0, 8]],
  [[2], [6], [0, 8]],
  [[0], [8], [2, 6]],
  [[3, 8], [0, 6], [2]],
  [[1, 8], [0, 2], [6]],
  [[1, 6], [2, 0], [8]],
  [[5, 6], [2, 8], [0]],
  [[2, 3], [0, 6], [8]],
  [[2, 7], [6, 8], [0]],
  [[0, 5], [2, 8], [6]],
  [[0, 7], [6, 8], [2]],

  // without Y 45 degree
  [[1, 3], [4], [0, 2, 6]],
  [[1, 5], [4], [0, 2, 8]],
  [[3, 7], [4], [0, 6, 8]],
  [[5, 7], [4], [2, 6, 8]],

  // Primeira jogada
  [[], [], [0, 2, 6, 8]],
  [[0], [], [4]],
  [[1], [], [4]],
  [[2], [], [4]],
  [[3], [], [4]],
  [[4], [], [0, 2, 6, 8]],
  [[5], [], [4]],
  [[6], [], [4]],
  [[7], [], [4]],
  [[8], [], [4]],
];
