const index = (req, res) => {
    res.render('index', { title: "Travlr Getways"});
};

baseModule.exports = {
    index
}