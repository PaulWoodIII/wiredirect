exports.index = function(req, res){
    if(!req.query.token){
        res.render('verify',{title:'Verify Please'});
    }
    else if(!req.query.device){
        res.render('verify',{title:'Verify Please'});
    }
    else if(!req.query.version){
        res.render('verify',{title:'Verify Please'});
    }
    else if (req.query.token && req.query.device && req.query.version){
        res.render('index',
            {
                title: 'Wire Router',
                token: req.query.token,
                device: req.query.device,
                version: req.query.version
            });
    }
    else{
        // Catch all doubt it should get here though
        res.render('verify',{title:'Verify Please'});
    }
};