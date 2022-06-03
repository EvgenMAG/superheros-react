import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';




export default function Paginator(props) {
    // console.log(props);
    const { data, changePage } = props
    let [page, setPage] = useState(1);

    const handlePAginator = (e, page) => {
        // console.log(page)
        setPage(page)
        changePage(page)

    }

    return (
        <Box

        >
            <Stack spacing={2}
                sx={{
                    width: 500,
                    height: "auto",
                    marginLeft: "auto",
                    marginRight: "auto",

                }}
            >
                <Pagination sx={{
                    height: "auto",
                    marginLeft: "auto",
                    marginRight: "auto",

                }}
                    onChange={handlePAginator}
                    count={data.totalPages}
                    page={page}
                    size="large" />
            </Stack>
        </ Box>

    );
}
