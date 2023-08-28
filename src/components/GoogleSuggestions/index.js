import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionList} = this.props
    const searchResult = suggestionList.filter(eachitem =>
      eachitem.suggestion.includes(searchInput),
    )

    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            alt="google logo"
          />
        </div>
        <ul>
          <div>
            <input type="search" onChange={this.onChangeSearchInput} />
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
          </div>
          {searchResult.map(eachitem => (
            <SuggestionItem key={eachitem.id} item={eachitem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
