//////////////////////////////////////////////////////////////////////
//  RENDER PAGES
//////////////////////////////////////////////////////////////////////
let listening = () => {
    console.log('listening on port ' + process.env.PORT + ' . . .');
}

let home = (request, response) => {
    response.render('index.html');
}

let about = (request, response) => {
    response.render('about.html');
}

///////////// start modules //////////////////



module.exports = {
    listening,
    home,
    about
}
