import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'f17a429a90msh542db698e4d2b60p1c2e9djsn9726c9727048'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: (coinId, timeperiod) => createRequest(`/coin/${coinId}/history/${timeperiod}`),
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
        
    })
});
export const{
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery
} = cryptoApi;

// var options = {
//     method: 'GET',
//     url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/get-meta-data',
//     params: {locale_info: 'en_US', lang_ID: '1', time_utc_offset: '28800'},
//     headers: {
//       'x-rapidapi-host': 'investing-cryptocurrency-markets.p.rapidapi.com',
//       'x-rapidapi-key': 'f17a429a90msh542db698e4d2b60p1c2e9djsn9726c9727048'
//     }
//   };


