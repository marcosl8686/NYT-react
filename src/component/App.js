import React, { Component } from 'react';
import Header from './Header/header';
import Search from './Section/search';
import Result from './Section/result';
import SavedArticle from './Section/savedArticle';
import fetchNews from './action/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          title: "text4",
          time: "time1"
        },
        {
          title: "text5",
          time: "time2"
        },
        {
          title: "text6",
          time: "time3"
        }
      ],
      savedArticles: []
    }
  }

  saveArticle = (article) => {
    let {articles} = this.state;
    let newArticles = this.state.savedArticles.slice();
    newArticles.push(article);
      this.setState({
        savedArticles: newArticles
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Result articles = {this.state.articles} saveArticle={this.saveArticle}/>
        <SavedArticle savedArticles = {this.state.savedArticles}/>
      </div>  
    );
  }
}

export default App;
