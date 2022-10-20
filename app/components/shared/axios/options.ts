export const getAllCryptocurrencies = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "4e92fa6569mshee1bf88970a5873p105bf5jsn0589daf042a0",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

export const getTopPriceCryptocurrencies = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "price",
    orderDirection: "desc",
    limit: "3",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "4e92fa6569mshee1bf88970a5873p105bf5jsn0589daf042a0",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

export const getChangeCryptocurrencies = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "change",
    orderDirection: "desc",
    limit: "3",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "4e92fa6569mshee1bf88970a5873p105bf5jsn0589daf042a0",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

export const getMarketCapCryptocurrencies = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "3",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "4e92fa6569mshee1bf88970a5873p105bf5jsn0589daf042a0",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

export const get24hVolumeCryptocurrencies = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "24hVolume",
    orderDirection: "desc",
    limit: "3",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "4e92fa6569mshee1bf88970a5873p105bf5jsn0589daf042a0",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};


export const getCoinById = {
  fetchCoin(id: any) {
    return {
      method: "GET",
      url: `https://coinranking1.p.rapidapi.com/coin/${id}`,
      params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
      headers: {
        "X-RapidAPI-Key": "4e92fa6569mshee1bf88970a5873p105bf5jsn0589daf042a0",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com"
      }
    };
  }
};

export const getCoinPriceHistory = {
  fetchHistory(time: string = "1H", id: string) {
    return {
      method: "GET",
      url: `https://coinranking1.p.rapidapi.com/coin/${id}/history`,
      params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: time },
      headers: {
        "X-RapidAPI-Key": "4e92fa6569mshee1bf88970a5873p105bf5jsn0589daf042a0",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com"
      }
    };
  }
};

export const getNews = {
  method: "GET",
  url: "https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news",
  params: {
    pair_ID: "1057391",
    page: "1",
    time_utc_offset: "28800",
    lang_ID: "1",
  },
  headers: {
    "X-RapidAPI-Key": "8b3b748fffmsh46a937c0d656af6p1f5d83jsn58d8b29e39ad",
    "X-RapidAPI-Host": "investing-cryptocurrency-markets.p.rapidapi.com",
  },
};

