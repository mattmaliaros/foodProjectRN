import React, { useState } from 'react';
import { View, Text, Stylesheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const searchAPI = async searchTerm => {
    // console.log('hi there');
    try {
      const response = await yelp.get('/search', {
        params: { limit: 50, term: searchTerm, location: 'san jose' }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMsg('Something went wrong');
    }
  };

  //Call searchAPI when component is first rendered -- BAD CODE!
  //searchAPI('pasta');

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

export default SearchScreen;
