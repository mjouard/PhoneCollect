import constants from "../utils/constants";

const server_host = constants.server_host

export async function login(user) {
    return fetch(server_host + '/login', {
        headers: {
            'Content-Type': 'application/json',
          },
        method: 'POST',
        body: JSON.stringify(user),
    }).then((res) => res.json());
}