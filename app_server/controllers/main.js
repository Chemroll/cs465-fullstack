/* GET Homepage */
const index = (req, res) => {
    console.log('Inside app_server, controllers, main.js, index function.');
    res.render('index', { title: "Travlr Getways"});
};

module.exports = {
    index
}