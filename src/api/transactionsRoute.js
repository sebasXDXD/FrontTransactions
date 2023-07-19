import axios from 'axios';
const API_TRANSACTIONS = "http://127.0.0.1:8000";


export function getTransactions(id) {
    const data = `${API_TRANSACTIONS}/api/users/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ0ZXN0IjozMjE0MTIsInVzZXIiOiJmM3IyIn0NcPLPRLSvfszQwtxZLyypsm3Y56ELRdppqYXDv2Hagk/transactions/${id}`;
    return axios.get(data);
}