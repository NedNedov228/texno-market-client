import axios from "axios";
import { FC } from "react";

export const API_URL : string = 'http://192.168.0.104:8000/api';
export let isAuth : boolean;




// Check if token is in localStorage and is not expired and set isAuth to true
if (localStorage.getItem('token')) {
    isAuth = true;
}
else isAuth = false;

export const logout = () => {
    localStorage.removeItem('token');
    isAuth = false;
    location.reload();
}
    

export const login = async (email : string, password : string) => {
    console.log('login invoke')
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });


    if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.accessToken);
        isAuth = true;
        location.reload();
    }
}

export const register = async (username, password) => {



    const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    });

    if (response.ok) {

        //goto login page
        location.href = '/login';

    }

    // Add Complainment

    
}


export const getComplainments = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/zayavki/my`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            const json = await response.json();
            return json;
        } else {
            console.error('Failed to fetch complaints', response.statusText);
            return [];
        }
    } catch (error) {
        console.error('An error occurred while fetching complaints:', error);
        return [];
    }
};

export const addComplain = async (description, status) => {
    try {
        status = 1; 
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/zayavki/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ description, status })
        });

        if (response.ok) {
            const json = await response.json();
            location.reload();
            return json;
        } else {
            console.error('Failed to add complaint', response.statusText);
            return null;
        }
    } catch (error) {
        console.error('An error occurred while adding complaint:', error);
        return null;
    }
};

export const getItems = async () => {
    try {
        const response = await fetch(`${API_URL}/items`, {
            method: 'GET'
        });

        if (response.ok) {
            const json = await response.json();
            return json;
        } else {
            console.error('Failed to fetch items', response.statusText);
            return [];
        }
    } catch (error) {
        console.error('An error occurred while fetching items:', error);
        return [];
    }
};

export const deleteComplain = async (id) => {
    console.log('invoke deleteComplain', id);
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/zayavki/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            // location.reload();
            return true;
        } else {
            console.error('Failed to delete complaint', response.statusText);
            // location.reload();
            return false;
        }
    } catch (error) {
        console.error('An error occurred while deleting complaint:', error);
        // location.reload();
        return false;
    }
}
;