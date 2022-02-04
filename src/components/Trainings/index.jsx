import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { v4 as uuidv4 } from 'uuid';
import Moment from 'react-moment';
import { IconButton } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router-dom';

import useStyles, { DataGridDiv } from './style';
import RemoveModal from '../RemoveModal';
import { getTrainings, deleteTraining } from '../../redux/actions';

const Trainings = ({ openLeft, setOpenLeft }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const trainings = useSelector(
    (state) => state.trainings.trainingsList.content
  );
  const searchTerm = useSelector((state) => state.trainings.searchTerm);
  const [pageSize, setPageSize] = React.useState(5);
  const [removeModal, setRemoveModal] = useState(false);
  const [rowData, setRowData] = useState();

  const handleDelete = (params) => {
    setRemoveModal(true);
    setRowData(params.row);
  };

  const onSubmitDelete = () => {
    dispatch(deleteTraining(rowData.id));
    dispatch(getTrainings());
    navigate(`/trainings`);
    setRemoveModal(false);
    //window.location.reload();
  };

  const renderCellDelete = (params) => {
    return (
      <div>
        <IconButton onClick={() => handleDelete(params)}>
          <DeleteOutlineIcon />
        </IconButton>
      </div>
    );
  };

  const columns = [
    { field: 'id', hide: true },
    {
      field: 'delete',
      headerName: 'Delete',
      align: 'center',
      sortable: false,
      width: 100,
      renderCell: renderCellDelete,
    },
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
      id: training.links[0].href,
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
      <RemoveModal
        removeModal={removeModal}
        setRemoveModal={setRemoveModal}
        onSubmitDelete={onSubmitDelete}
      />
    </DataGridDiv>
  );
};

export default Trainings;
