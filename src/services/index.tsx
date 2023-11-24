import axios from 'axios';

export const API = process.env.NEXT_PUBLIC_API_URL!

//! Method POST
//! Method GET
export const getCategory = async () => {
    const response = await axios.get(`${API}/categories`);
    return response.data.data;
};
//! Method PATCH
//! Method Delete