import React from 'react';

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data;
        this.setState({allMemeImgs: memes})
      })
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randomMemeImg = this.state.allMemeImgs[randomNumber].url;
    this.setState({ randomImg: randomMemeImg })
  }

  render() {
    return (
      <div style={{maxWidth: 600, margin: "0 auto"}}>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            name="topText"
            type="text"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange} />
          <input
            name="bottomText"
            type="text"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange} />
          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="meme" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}

export default MemeGenerator;