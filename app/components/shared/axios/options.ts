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