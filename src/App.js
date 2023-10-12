import { Component } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import './App.css';
import defaultMarkdown from './Markdown';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: defaultMarkdown(),
    }
  }

  updateContent(str) {
    this.setState({
      markdown: str
    });
  }

  render() {
    return (
      <div className="app">
        <Editor content={this.state.markdown} onChange={this.updateContent.bind(this)} />
        <Preview content={this.state.markdown} />
      </div>
    );
  }
}

export default App;
