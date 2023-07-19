import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from "../api/usersRoute";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
const ListUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const userList = await getUsers();
                console.log(userList);
                setUsers(userList.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    const handleUserClick = (userId) => {
        // Aquí puedes hacer cualquier lógica adicional antes de redireccionar
        console.log('Usuario seleccionado:', userId);
    };
    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Usuario</TableCell>
                            <TableCell>Email - password</TableCell>
                            <TableCell>Fecha de creacion</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    {/* Agregamos un enlace (Link) que redirecciona a ListUsersTransactions */}
                                    <Link to={`/transactions/${user.id}`} onClick={() => handleUserClick(user.id)}>
                                        {user.name}
                                    </Link>
                                </TableCell>
                                <TableCell>{user.name} </TableCell>
                                <TableCell>{user.email} - {user.password}</TableCell>
                                <TableCell>{user.created_at}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
};

export default ListUsers;
