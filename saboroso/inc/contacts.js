var conn = require('./db');

module.exports = {

  render(req, res, error, success) {
    res.render('contacts', {
      title: 'Contato Restaurante Saboroso',
      background: 'images/img_bg_3.jpg',
      h1: 'Diga um oi!',
      body: req.body,
      error,
      success
    });
  },

  save(fields) {
    return new Promise((resolve, reject) => {
      //let register = new Date();
      // register = register.toLocaleDateString();
      // register = register.split('/');
      //register = `${date[2]}-${date[1]}-${date[0]}`;
      conn.query(`
      INSERT INTO tb_contacts (name, email, message)
      VALUES(?, ?, ?)
      `, [
        fields.name,
        fields.email,
        fields.message,
        //register
      ], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

};