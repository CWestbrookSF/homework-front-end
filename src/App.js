import React, { Component } from 'react';
import Gifs from './Gifs';
// import ReactModal from 'react-modal';
// import Gallery from './Gallery';
// import logo from './logo.svg';
// import './App.css';

// const api_key = process.env.REACT_APP_API_KEY;


class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     showModal: false
  //   };
  //   this.handleOpenModal = this.handleOpenModal.bind(this);
  //   this.handleCloseModal = this.handleCloseModal.bind(this);
  // }
  // handleOpenModal () {
  // this.setState({ showModal: true });
  // }

  // handleCloseModal () {
  // this.setState({ showModal: false });
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Giphy Gifs</h2>
        </div>
        <p className="App-intro">
           🔥 Trending so trendily 🦄
        </p>
        <Gifs />

        </div>
    );
  }
}

export default App;


              // <div key={gif.id}>
              //       <img src={imageSource} alt={imageAlt} onClick={this.handleOpenModal} />
              //     <ReactModal 
              //            isOpen={this.state.showModal}
              //            contentLabel="A Modal Popup"
              //            onRequestClose={this.handleCloseModal}
              //         >
              //           <img src={imageSource} alt={imageAlt} />
              //           Some info about the image.. 
              //           <button onClick={this.handleCloseModal}>Close</button>
              //         </ReactModal>
              //       </div>