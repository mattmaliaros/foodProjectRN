import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses/',
  headers: {
    Authorization:
      'Bearer o0uFCQBcmeQ5mKkhG0h5ggc6n7TNe90KZN1fKsce3CdbmIUdLFEKU9njq6TYt3YcYBpQWEX8Hi_fD_itLR7OEBD2xA7z9zU92SfRJTVHE3CDIvi5t92t3wxsb-HdXXYx'
  }
});
