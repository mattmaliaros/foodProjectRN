import React, { useState, useEffect } from 'react';
import { View, Text, Stylesheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchAPI, results, errorMsg] = useResults();
  // console.log(results);
  const filterResultsByPrice = price => {
    //price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title='Cost Effective'
          // navigation={navigation}
        />
        <ResultsList
          // navigation={navigation}
          results={filterResultsByPrice('$$')}
          title='Bit Pricier'
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title='Big Spender'
          // navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
