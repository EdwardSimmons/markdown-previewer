import { Component } from 'react';
import Markdown from 'marked-react';
import './Preview.css';


class Preview extends Component {
    render() {
        return (
            <div id="preview" className="preview-container">
                <Markdown className="markdown" breaks={true} gfm={true}>
                    {this.props.content}
                </Markdown>
            </div>
        );
    }
}

export default Preview;
