const {IncomingForm} = require('formidable');
const {readTasksFromFile, writeTasksToFile } =require("../utils/fileHandler")

exports.getTasks =(req, res) =>{
    const tasks = readTasksFromFile();
    res.writeHead(200, {'content-type': 'application/json'})
    res.end(JSON.stringify(tasks))
}

exports.createTasks = (req, res) =>{
    const form= new IncomingForm();
    form.parse(req, (err, fields, files) =>{
        if(err){
            res.writeHead(400, {'content-type': 'application/json'});
            res.end(JSON.stringify({
                message: 'Error parsing form'
            }))
            return;
        }
    