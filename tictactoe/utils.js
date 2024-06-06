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
