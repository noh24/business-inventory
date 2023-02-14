import React from "react";
import Table from "./Table";
import MainContentControl from "./MainContentControl";
import NewProduct from "./NewProduct";
import data from "./data";
import Modal from "./Modal";
import EditProduct from "./EditProduct";

export default class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: null,
      dataList: [...data],
      selectedProduct: null,
      displayEdit: null,
    };
  }

  handleToggleDisplay = () => {
    this.setState((state) => ({
      displayList: !state.displayList,
      displayForm: null,
    }));
  };

  handleFormDisplay = () => {
    this.setState((state) => ({ displayForm: !state.displayForm }));
  };

  handleAddNewProduct = (newProduct) => {
    const newDataList = this.state.dataList.concat(newProduct);
    this.setState({
      dataList: newDataList,
      displayForm: null,
      displayList: true,
    });
  };

  handleDetailsDisplay = (id) => {
    const selectedProduct = this.state.dataList.filter(
      (product) => product.id === id
    )[0];
    this.setState({ selectedProduct: selectedProduct });
  };

  handleResetDetailsDisplay = () => {
    this.setState({ selectedProduct: null, displayEdit: false });
  };

  handleEditDisplay = () => {
    this.setState({ displayEdit: true });
  };

  handleEditProduct = (edittedProduct) => {
    const newProductList = this.state.dataList
      .filter((entry) => entry.id !== edittedProduct.id)
      .concat(edittedProduct);
    this.setState({
      dataList: newProductList,
      displayEdit: false,
      selectedProduct: edittedProduct,
    });
  };

  // handleDeleteProduct = (id) => {
  //   const newProductList = this.state.dataList.filter(entry => entry.id !== id);
  //   this.setState(() => ({ dataList: newProductList, selectedProduct: null, }));
  // }

  render() {
    return (
      <div className="lg:w-1/2 w-full container">
        <MainContentControl
          displayForm={this.state.displayForm}
          onFormDisplay={this.handleFormDisplay}
        ></MainContentControl>

        {this.state.displayForm ? (
          <NewProduct onAddNewProduct={this.handleAddNewProduct}></NewProduct>
        ) : (
          <Table
            data={this.state.dataList}
            onDetailsDisplay={this.handleDetailsDisplay}
          ></Table>
        )}

        {this.state.selectedProduct && !this.state.displayEdit && (
          <Modal
            data={this.state.dataList}
            onModalClose={this.handleResetDetailsDisplay}
            selectedProduct={this.state.selectedProduct}
            onEditClick={this.handleEditDisplay}
            onUpdateSelectedProduct={this.handleDetailsDisplay}
          ></Modal>
        )}

        {this.state.displayEdit && (
          <EditProduct
            selectedProduct={this.state.selectedProduct}
            onModalClose={this.handleResetDetailsDisplay}
            onEditSubmit={this.handleEditProduct}
          ></EditProduct>
        )}
      </div>
    );
  }
}
