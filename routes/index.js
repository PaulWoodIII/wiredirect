exports.index = function(req, res){
    if(!req.query.token){
        res.send(404,'Error validating token');
    }
    else if(!req.query.device){
        res.send(404,'Error validating device');
    }
    else if(!req.query.version){
        res.send(404,'Error validating version');
    }
    else if (req.query.token && req.query.device && req.query.version){
        res.render('index', { title: 'Wire Router' });
    }
    else{
        // Catch all doubt it should get here though
        res.send(404,'Error validating');
    }
};