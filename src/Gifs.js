import React, { Component } from 'react';
import spinning from './spinning_logo_from_seeklogo.png';
import ReactModal from 'react-modal';


const deleteMeApiKey = '';
const apiLink = `http://api.giphy.com/v1/gifs/trending?api_key=${deleteMeApiKey}`;



class Gifs extends Component {
	constructor() {
		super();
		this.state = {
			gifs: [],
			loading: true,
			showModal: false
		};
		this.handleOpenModal = this.handleOpenModal.bind(this);
	    this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	handleOpenModal () {
	this.setState({ showModal: true });
	}

	handleCloseModal () {
	this.setState({ showModal: false });
	}


	componentDidMount() {
		fetch(apiLink) // TODO don't commit this key!! naughty bad bad
		.then(results => {
			return results.json();
		}).then(data => {
			// console.log(data);
			let gifs = data.data.map((gif) => {		
				let imageSource;
				let imageAlt;
				if (gif.images.fixed_height_small.url) {
					imageSource = gif.images.fixed_height_small.url;
					imageAlt = gif.title;
				} else {
					imageSource = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png';
					imageAlt = "No image available";
				}
				return(
					<div key={gif.id}>
						<button onClick={this.handleOpenModal}><img src={imageSource} alt={imageAlt}  /></button>
						<ReactModal 
				           isOpen={this.state.showModal}
				           contentLabel="A Modal Popup"
				           onRequestClose={this.handleCloseModal}
				        >
				        	<img src={imageSource} alt={imageAlt} />
				        	Some info about the image.. 
				        	<button onClick={this.handleCloseModal}>Close</button>
				        </ReactModal>
			        </div>
				)
			})
			
			this.setState({loading:false, gifs: gifs});
		})
	}

	render() {
		if(this.state.loading) {
			return (
				<div>
					<hr /> <br />
					<div>
						<img src={spinning} className="App-logo" alt="spinning" />
						<br /><br />
						Loaded page has not, wait you must 
					</div>
					<br /> <hr />
				</div>
			)
		}
		else{
			return (
				<div>
					<div>
						<hr /><br />
			        </div>
					{this.state.gifs}
					{/*<pre><code>{JSON.stringify(this.state, null, 4)}</code></pre> */}
				</div>

			)}
	}

}

export default Gifs;