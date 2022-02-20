import { db } from '../firebaseconfig'
import { collection,doc, deleteDoc } from 'firebase/firestore';
import { List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import './Todo.css'

const Todo = ({arr}) =>{
    return(
        <List className="todo__list">
            <ListItem>
                <ListItemText primary={arr.item.todo} secondary={arr.item.todo}/>
            </ListItem>
            <DeleteForeverIcon fontSize='large' onClick={() => {
                deleteDoc(doc(db,'todos',arr.id))
            }}/>
        </List>
    )
}

export default Todo