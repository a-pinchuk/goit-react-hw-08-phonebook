import { useSelector } from 'react-redux';
import { getFilteredUser, getUsers } from 'redux/contacts/contactSelectors';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contactsApi';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { faker } from '@faker-js/faker';

function getRandomAvatar() {
  return faker.image.avatar();
}

const ContactList = () => {
  const contactUser = useSelector(getUsers);
  const filteredUser = useSelector(getFilteredUser);
  const dispatch = useDispatch();
  const normalizeFilteredUser = filteredUser.toLowerCase();
  const visibleContacts = contactUser.filter(el =>
    el.name.toLowerCase().includes(normalizeFilteredUser)
  );

  return (
    <List dense sx={{ width: '100%', maxWidth: 460 }}>
      {visibleContacts.map(({ id, number, name }) => {
        const labelId = `checkbox-list-secondary-label-${name}`;
        return (
          <ListItem key={id} disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt={`Avatar n°${id + 1}`} src={getRandomAvatar()} />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`${name}, ${number}`} />
            </ListItemButton>
            <Button
              sx={{ marginLeft: 4 }}
              type="button"
              onClick={() => {
                dispatch(deleteContacts(id));
              }}
              variant="outlined"
              startIcon={<DeleteIcon />}
              style={{
                color: '#f7f4f3',
                backgroundColor: '#ff4500', // Замените на желаемый цвет текста
              }}
            >
              Delete
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContactList;
