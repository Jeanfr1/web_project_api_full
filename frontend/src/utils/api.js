class Api {
  constructor(baseUrl, options) {
    this._baseUrl = baseUrl;
    this._options = options;
  }

  _makeRequest(endpoint, method = "GET", body = null) {
    const options = {
      method,
      headers: { ...this._options.headers },
    };

    if (body) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(body);
    }

    return fetch(`${this._baseUrl}${endpoint}`, options).then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }
      return res.json();
    });
  }

  getInitialCards() {
    return this._makeRequest("/cards");
  }

  createNewCard({ name, link }) {
    return this._makeRequest("/cards", "POST", { name, link });
  }

  deleteCard(cardId) {
    return this._makeRequest(`/cards/${cardId}`, "DELETE");
  }

  addLikes(cardId) {
    return this._makeRequest(`/cards/likes/${cardId}`, "PUT");
  }

  removeLikes(cardId) {
    return this._makeRequest(`/cards/likes/${cardId}`, "DELETE");
  }

  getUserInfo() {
    return this._makeRequest("/users/me");
  }

  editProfile(userData) {
    return this._makeRequest("/users/me", "PATCH", userData);
  }

  editAvatar({ avatar }) {
    return this._makeRequest("/users/me/avatar", "PATCH", { avatar });
  }

  changeLikeCardStatus(cardId, isLiked) {
    return isLiked ? this.removeLikes(cardId) : this.addLikes(cardId);
  }
}

const api = new Api("http://localhost:3001", {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    "Content-Type": "application/json",
  },
});

export default api;
