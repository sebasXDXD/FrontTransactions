import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTransactions } from "../api/transactionsRoute";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
const ListUsersTransactions = () => {
  // Obtener el id del usuario seleccionado de la URL
  const { id } = useParams();
  const [usersTransactions, setUsersTransactions] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const userTransactionsList = await getTransactions(id);
        setUsersTransactions(userTransactionsList.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <div>
      {usersTransactions.length === 0 ? (
        <div>El usuario no tiene registradas transacciones en el sistema</div>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Usuario id</TableCell>
                <TableCell>Descripcion</TableCell>
                <TableCell>Email - password</TableCell>
                <TableCell>Fecha de creacion</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersTransactions.map((userTransaction) => (
                <TableRow key={userTransaction.id}>
                  <TableCell>{userTransaction.user_id} </TableCell>
                  <TableCell>{userTransaction.descripcion}</TableCell>
                  <TableCell>{userTransaction.valor}</TableCell>
                  <TableCell>{userTransaction.created_at}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default ListUsersTransactions;
