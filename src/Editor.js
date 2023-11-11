import { Component } from 'react';
import './Editor.css';


class Editor extends Component {
    render() {
        return (
            <div className="editor-container">
                <textarea
                    id="editor"
                    onChange={e => this.props.onChange(e.target.value)}
                    rows={4}
                    className="editor-textarea"
                >
                    {this.props.content}
                </textarea>
            </div>
        );
    }
}

export default Editor;
