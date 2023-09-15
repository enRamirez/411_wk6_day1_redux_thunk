import React from 'react'

import {
    Container,
    Button,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    IconButton
} from '@mui/material'

// import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const Import = (props) => {
    return (
        <Container>
            <h2>Count: {props.makes.length}</h2>
            <Button onClick={props.fetchMakes} variant='contained' color='primary'>Import</Button>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>MAKE</TableCell>
                        <TableCell>ACTIONS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((row, index) => (
                        <TableRow key={row.MakeName}>
                            <TableCell>{row.MakeId}</TableCell>
                            <TableCell>{row.MakeName}</TableCell>
                            <TableCell>
                                <IconButton>
                                    <MoreVertIcon
                                    row={row.MakeId}
                                    onClick={() => props.deleteMake(index)}/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </Container>
    )
}

export default Import