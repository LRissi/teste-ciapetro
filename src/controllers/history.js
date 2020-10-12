const axios = require('axios');
const History = require("../models/history.js");
const currencyLayerConfig = require('../config/currencyLayer.js');

function saveHistory(history, res) {
	History.create(history, (err, data) => {
		if (err) {
	      res.status(500).send({
	        message:
	          err.message || "Ocorreu algum erro na criação do histórico de pesquisa."
	      });
	    }
	});
}

exports.list = (req, res) => {
  	const url = `http://api.currencylayer.com/list?access_key=${currencyLayerConfig.KEY}`
  	console.log(url);
  	axios({
        method:'get',
        url,
    })
    .then(function (response) {
        res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
}

exports.convert = (req, res) => {
	if (!req.body) {
    	res.status(400).send({
      		message: "Requisição sem conteúdo!"
    	});
    	return;
  	}
  	const sourceCoin = req.body.source;
  	const destinyCoin = req.body.destiny;
  	const { userId } = req.body
  	const url = `http://api.currencylayer.com/live?access_key=${currencyLayerConfig.KEY}&` +
  				`currencies=${destinyCoin}`
  	axios({
        method:'get',
        url,
    })
    .then(function (response) {
        const conversionValue = response.data.quotes[sourceCoin + destinyCoin];
        saveHistory({
        	user_id: userId,
        	source_coin: sourceCoin,
        	destiny_coin: destinyCoin,
        	conversion_value: conversionValue
        }, res);
        res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
}