import React, {Component} from 'react';
import axios from 'axios';

class NotesList extends Component {

    state = {
        notes: [],
    }

    componentDidMount() {
        axios.get("https://project-djorg.herokuapp.com/api/notes/")
            .then(res => this.setState({notes: res.data}))
            .catch(err => console.log(err))
    };

    render() {

        return (
            <div>
               {this.state.notes.map(note => <div>{note.title}</div>)}
            </div>
        );
    }
}

export default NotesList;