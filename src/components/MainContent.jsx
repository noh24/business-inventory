import React from "react";
import Header from "./utility-components/Header";
import Carousel from "./Carousel";
import Table from "./Table";
import MainContentControl from "./MainContentControl";
import NewProduct from "./NewProduct";
import data from './data';
import Modal from "./Modal";

export default class MainContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayList: null,
      displayForm: null,
      dataList: [...data],
      selectedProduct: null,
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

  handleDetailsDisplay = (id) => {
    const selectedProduct = this.state.dataList.filter(product => product.id === id)[0];
    this.setState({ selectedProduct: selectedProduct, });
  }

  handleResetDetailsDisplay = () => {
    this.setState({ selectedProduct: null, }); 
  }
  
  render() {
    return (
      <div>
        <Header className="mt-10">
          <MainContentControl displayList={this.state.displayList} onToggleDisplay={this.handleToggleDisplay} onFormDisplay={this.handleFormDisplay}></MainContentControl>
        </Header>
        {this.state.displayForm ? <NewProduct onAddNewProduct={this.handleAddNewProduct}></NewProduct> : this.state.displayList ? <Table data={this.state.dataList}></Table> : <Carousel onDetailsDisplay={this.handleDetailsDisplay} data={this.state.dataList} ></Carousel>}
        {this.state.selectedProduct && <Modal data={this.state.dataList} onModalClose={this.handleResetDetailsDisplay} selectedProduct={this.state.selectedProduct}></Modal>}
      </div>
    );
  }
}
