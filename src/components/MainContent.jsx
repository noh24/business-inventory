import React from "react";
import Header from "./utility-components/Header";
import Carousel from "./Carousel";
import Table from "./Table";
import MainContentControl from "./MainContentControl";

export default class MainContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayList: null,
    }
  }

  handleToggleDisplay = () => {
    this.displayList ? this.setState(state => ({ displayList: !state.displayList, })) : this.setState(state => ({ displayList: !state.displayList, }))
  }

  render() {
    return (
      <div>
        <Header className="mt-10">
          <MainContentControl displayList={this.state.displayList} onToggleDisplay={this.handleToggleDisplay}></MainContentControl>
        </Header>
        {this.state.displayList ? <Table></Table> : <Carousel></Carousel>}
      </div>
    );
  }
}
