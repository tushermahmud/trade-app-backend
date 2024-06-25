const axios = require('axios');
const getTradeData = async () => {
    try {
           const masterTradeResponse = await axios.get(process.env.LAMBDA_URL);
           const masterTrade = masterTradeResponse.data;
           const mt4LoginResponse = await axios.get(
             `${process.env.MT4_API}/Connect?user=${process.env.MT4_API_USER}&password=${process.env.MT4_API_PASSWORD}&host=${process.env.MT4_API_HOST}&port=${process.env.MT4_API_PORT}`
           );
           const connectionId = mt4LoginResponse.data;
           const tradeResponse = await axios.get(
             `${process.env.MT4_API}/OrderSend`,
             {
               params: {
                 id: connectionId,
                 symbol: masterTrade.symbol,
                 operation: masterTrade.operation,
                 volume: masterTrade.volume,
                 takeprofit: masterTrade.takeprofit,
                 comment: "Blackalgo #",
               },
             }
           );
           return tradeResponse.data;
    } catch (error) {
        console.log("Error processing trade:", error.message);
    }
}

module.exports = { getTradeData };