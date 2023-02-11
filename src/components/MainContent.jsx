import React from "react";
import Header from "./utility-components/Header";
import Carousel from "./Carousel";
import Table from "./Table";
import MainContentControl from "./MainContentControl";
import NewProduct from "./NewProduct";
import data from './data';

export default class MainContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayList: null,
      displayForm: null,
      dataList: [...data],
    }
  }

  handleToggleDisplay = () => {
    this.setState(state => ({ displayList: !state.displayList, displayForm: null}))
  }

  handleFormDisplay = () => {
    this.setState({ displayForm: true, displayList: true })
  }

  handleAddNewProduct = (newProduct) => {
    const newDataList = this.state.dataList.concat(newProduct);
    this.setState({ dataList: newDataList, displayForm: null, displayList: true, })
  }
  
  render() {
    return (
      <div>
        <Header className="mt-10">
          <MainContentControl displayList={this.state.displayList} onToggleDisplay={this.handleToggleDisplay} onFormDisplay={this.handleFormDisplay}></MainContentControl>
        </Header>
        {this.state.displayForm ? <NewProduct onAddNewProduct={this.handleAddNewProduct}></NewProduct> : this.state.displayList ? <Table data={this.state.dataList}></Table> : <Carousel data={this.state.dataList} ></Carousel>}
      </div>
    );
  }
}
