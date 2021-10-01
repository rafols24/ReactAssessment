import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { FaEye, FaPencilAlt, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

 function Pagination({onDelete, onEdit} ) {
    const Contacts = JSON.parse(localStorage.getItem("ContactAdded"));
    console.log(Contacts)
  
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              <TableCell>Fullname</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Registered Data</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {Contacts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((contact)=>
                <TableRow className="classes.tr" hover key={contact.id}>
                <TableCell>{contact.fullname}</TableCell>

                <TableCell>{contact.email}</TableCell>

                <TableCell>{contact.number}</TableCell>

                <TableCell>{contact.location}</TableCell>

                <TableCell>{contact.date}</TableCell>
                <TableCell>
                
                <Link exact to={`/ShowContacts/${contact.id}`}><FaEye onClick={(contact.id)} className="editIcon" /></Link>&nbsp;
                        <FaTimes onClick={() => onDelete(contact.id)} className="delIcon" /> &nbsp;
                      <FaPencilAlt onClick={()=> onEdit(contact.id)} className="editIcon" />
                </TableCell>
                </TableRow>
          )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={Contacts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
export default Pagination;