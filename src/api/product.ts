import {GET_ORDERS, GET_PRODUCTS} from 'configs/url.config';
import http from 'services/http.services';

export async function GetProducts() {
    try {
        const response = await http.get(GET_PRODUCTS);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}

export async function GetProduct(id: string) {
    try {
        const response = await http.get(GET_PRODUCTS + '/' + id);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}

export async function GetRandomProducts(products: any[], count: number) {
    try {
        const response = await http.get(GET_PRODUCTS);
        const products = response.data;
        const max = products.length - count
        const min = 0
        const start = Math.floor(Math.random() * (max - min) + min)
        return products.slice(start, start + count)
    } catch (e) {
        return Promise.reject(e);
    }

}

export async function AddProduct(data: object) {
    let config = {
        headers: {
            token: localStorage.getItem("ACCESS_TOKEN"),
        },
    }
    try {
        const response = await http.post(GET_PRODUCTS, data, config);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}

export async function DeleteProducts(id: string) {
    let config = {
        headers: {
            token: localStorage.getItem("ACCESS_TOKEN"),
        },
    }
    try {
        const response = await http.delete(GET_PRODUCTS + '/' + id, config);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}

export async function UpdateProduct(id: string, data: Object) {
    try {
        const response = await http.put(GET_PRODUCTS + '/' + id, data);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}

export async function FilterProductByCategories(categorieId: string) {
    try {
        const response = await http.get(GET_PRODUCTS + '?category-id=' + categorieId);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}

export async function ProductsPagination(categoryId: string, page: string, pageSize: string, sortDate: string) {
    try {
        if (categoryId == "all") {
            const response = await http.get(GET_PRODUCTS + '?_page=' + page + '&_limit=' + pageSize + "&_sort=createdAt&_order=" + sortDate);
            return response;
        } else {
            const response = await http.get(GET_PRODUCTS + '?category-id=' + categoryId + '&_page=' + page + '&_limit=' + pageSize + "&_sort=createdAt&_order=" + sortDate);
            return response;
        }
    } catch (e) {
        return Promise.reject(e);
    }
}


export const showRandomProducts = (products: any[], count?: number) => {
    if (count === undefined) {
        return products.slice()
    } else {
        const max = products.length - count
        const min = 0
        const start = Math.floor(Math.random() * (max - min) + min)
        return products.slice(start, start + count)
    }
}

export async function searchProduct(searchPhrase: string) {
    try {
        const response = await http.get(`${GET_PRODUCTS}?q=${searchPhrase}`);
        return response;
    } catch (e) {
        return Promise.reject(e);
    }
}