import constants from "../utils/constants";
import { getCurrentUser } from "../utils/utils";

const token = getCurrentUser() ? getCurrentUser()["token"] : null;
const server_host = constants.server_host

export async function createProduct(formData) {
    return fetch(server_host + '/product', {
        method: 'POST',
        headers: {
            Authorization: "Bearer " + token
        },
        body: formData,
    }).then((res) => res.json());
}

export async function getProducts() {
    return fetch(server_host + "/product", {
        type: "GET",
    }).then((res) => res.json());
}

export async function getProduct(id) {
    return fetch(server_host + "/product/" + id, {
        type: "GET",
    }).then((res) => res.json());
}

export async function deleteProduct(id) {
    return fetch(server_host + "/product/" + id, {
        method: "DELETE"
    }).then((res) => res.json());
}
