import axios from 'axios';

const baseURL = 'http://localhost:3001';

export const uploadFiles = async (formData) => {
    try {
        const response = await axios.post(`${baseURL}/upload`, formData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const submitCompanyData = async (data) => {
    try {
        const response = await axios.post(`${baseURL}/company`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const submitFinancialData = async (data) => {
    try {
        const response = await axios.post(`${baseURL}/financial-data`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};