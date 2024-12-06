exports.get = (req,res) => {
    res.send('Get Customers JA');
}

exports.getById = (req,res) => {
    res.send("Customer ID: " + req.params.id);
}

exports.getName = (req,res) => {
    res.send("Customer Name: " + req.params.name);
}

exports.create = (req,res) => {
    res.send("Create new customer JA");
}

exports.edit = (req,res) => {
    res.send("Edit customer ID: " + req.params.id);
}

exports.editSome = (req,res) => {
    res.send("Edit some data customer ID:" + req.params.id);
}

exports.delete = (req,res) => {
    res.send("Delete customer ID: " + req.params.id);
}