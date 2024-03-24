import {Component} from 'react'
import {Bg, CustomButton, Meme, Para} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
    isShowMeme: false,
  }

  updateUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  updateTopText = event => {
    this.setState({topText: event.target.value})
  }

  updateBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  updateFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onSubmitData = event => {
    event.preventDefault()
    this.setState({isShowMeme: true})
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, isShowMeme} = this.state
    return (
      <Bg>
        <form onSubmit={this.onSubmitData}>
          <h1>Meme Generator</h1>
          <label htmlFor="imageUrl">Image URL</label>
          <br />
          <input
            placeholder="Enter the Image URL"
            id="imageUrl"
            name="imageUrl"
            value={imageUrl}
            type="text"
            onChange={this.updateUrl}
          />
          <br />
          <label htmlFor="topText">Top Text</label>
          <br />
          <input
            placeholder="Enter the Top Text"
            id="topText"
            name="topText"
            value={topText}
            type="text"
            onChange={this.updateTopText}
          />
          <br />
          <label htmlFor="bottomText">Bottom Text</label>
          <br />
          <input
            placeholder="Enter the Bottom Text"
            id="bottomText"
            name="bottomText"
            value={bottomText}
            type="text"
            onChange={this.updateBottomText}
          />
          <br />
          <label htmlFor="fontSize">Font Size</label>
          <br />
          <select
            id="fontSize"
            name="fontSize"
            onChange={this.updateFontSize}
            value={fontSize}
          >
            {fontSizesOptionsList.map(eachOption => (
              <option key={eachOption.optionId} value={eachOption.displayText}>
                {eachOption.displayText}
              </option>
            ))}
          </select>
          <br />
          <CustomButton type="submit">Generate</CustomButton>
        </form>

        <Meme data-testid="meme" show={isShowMeme} bgImg={imageUrl}>
          {isShowMeme && (
            <>
              <Para text={fontSize}>{topText}</Para>
              <Para text={fontSize}>{bottomText}</Para>
            </>
          )}
        </Meme>
      </Bg>
    )
  }
}

export default MemeGenerator
