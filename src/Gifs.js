import React, { Component } from 'react';
import Gallery from "./Gallery";


const deleteMeApiKey = '';
const apiLink = `http://api.giphy.com/v1/gifs/trending?api_key=${deleteMeApiKey}`;



class Gifs extends Component {
	constructor() {
		super();
		this.state = {
			gifs: [],
		};
	}
	componentWillMount(){
		console.log(process.env.REACT_APP_API_KEY);

	}
		componentDidMount() {
		fetch(apiLink) // TODO don't commit this key!! naughty bad bad
		.then(results => {
			return results.json();
		}).then(data => {
			// console.log(data);

			let gifs = data.data.map((gif) => {		let imageSource;
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
						<div>
							<img src={imageSource} alt={imageAlt} />
						</div>
					</div>
				)
			})

			this.setState({ gifs: gifs });
		})
	}

	render() {
		return (
			<div>
				{this.state.gifs}
				{/*<pre><code>{JSON.stringify(this.state, null, 4)}</code></pre>   */}
				
			</div>

		)
	}

}

export default Gifs;