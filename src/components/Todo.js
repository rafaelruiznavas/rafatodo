import { db } from '../firebaseconfig'
import { doc, deleteDoc } from 'firebase/firestore';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import './Todo.css'
import moment from 'moment';
import { BorderClear } from '@material-ui/icons';

const Todo = ({ arr }) => {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <BorderClear />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={arr.item.todo}
                    secondary={arr.item.timestamp ? moment(arr.item.timestamp.second).format('DD/MM/YYYY HH:mm') : ''} />
            </ListItem>
            <DeleteForeverIcon fontSize='large' onClick={() => {
                deleteDoc(doc(db, 'todos', arr.id))
            }} />
        </List>
    )
}

export default Todo