import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { v4 as uuidv4 } from 'uuid';
import Moment from 'react-moment';

import useStyles, { DataGridDiv } from './style';

const Trainings = ({ openLeft, setOpenLeft }) => {
  const classes = useStyles();
  const trainings = useSelector(
    (state) => state.trainings.trainingsList.content
  );
  const searchTerm = useSelector((state) => state.trainings.searchTerm);
  const [pageSize, setPageSize] = React.useState(5);

  const columns = [
    { field: 'id', hide: true },
    {
      field: 'date',
      headerName: 'Date',
      width: 400,
      renderCell: (params) => (
        <Moment format='MMMM Do YYYY, h:mm:ss a'>{params.value}</Moment>
      ),
    },
    { field: 'duration', headerName: 'Duration', width: 400 },
    { field: 'activity', headerName: 'Activity', width: 600 },
  ];

  const rows = trainings
    ?.filter((training) =>
      training.activity.toLowerCase().includes(searchTerm?.toLowerCase())
    )
    .map((training) => ({
      id: uuidv4(),
      date: training.date,
      duration: training.duration,
      activity: training.activity,
    }));

  return !trainings?.length ? (
    <CircularProgress className={classes.loading} size={80} />
  ) : (
    <DataGridDiv open={openLeft}>
      <DataGrid
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        columns={columns}
        rows={rows}
        scrollbarSize={0}
      />
    </DataGridDiv>
  );
};

export default Trainings;
