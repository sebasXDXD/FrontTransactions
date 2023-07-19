import axios from 'axios';
const API_USERS = "http://127.0.0.1:8000";


export function getUsers() {
    const data = `${API_USERS}/api/users/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ0ZXN0IjozMjE0MTIsInVzZXIiOiJmM3IyIn0NcPLPRLSvfszQwtxZLyypsm3Y56ELRdppqYXDv2Hagk`;
    return axios.get(data);
}