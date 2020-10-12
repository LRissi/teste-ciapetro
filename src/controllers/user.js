const User = require("../models/user.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Requisição sem conteúdo!"
    });
    return;
  }

  const user = new User({
  	uid: req.body.uid,
    email: req.body.email,
    name: req.body.name
  });

  User.create(user, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Ocorreu algum erro na criação no usuário."
      });
      return;
    }
    res.send(data);
  });
};

exports.findAll = (req, res) => {
  	User.getAll((err, data) => {
    	if (err) {
      		res.status(500).send({
        		message:
          		err.message || "Ocorreu algum erro na busca dos usuários."
      		});
      	return;
    	}
    	res.send(data);
  	});
};

exports.findOne = (req, res) => {
  	User.findById(req.params.userId, (err, data) => {
    	if (err) {
      		if (err.kind === "not_found") {
	        	res.status(404).send({
	          		message: `Nenhum usuário encontrado com o id ${req.params.userId}.`
	        	});
	        return;
      	}

	    res.status(500).send({
	      	message: "Erro ao buscar o usuário com id " + req.params.userId
	    });
      	return;
    }
    res.send(data);
  });
};