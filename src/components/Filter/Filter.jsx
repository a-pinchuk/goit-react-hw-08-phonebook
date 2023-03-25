import { useDispatch } from 'react-redux';
import { getVisibleContact } from 'redux/filter/filterSlice';
import { TextField, Box } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Box display="block" mb={2}>
        <TextField
          id="outlined-multiline-flexible"
          label="Find contacts by name"
          multiline
          type="text"
          onChange={e => dispatch(getVisibleContact(e.target.value))}
        />
      </Box>
    </>
  );
};

export default Filter;
