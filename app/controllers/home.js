
module.exports = function() {
   var controller = {};
   controller.index = function(red,res){
      res.render('index', {nome: 'Express'});
   };

return controller;
}
