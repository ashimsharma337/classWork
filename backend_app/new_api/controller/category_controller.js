const Category = require("../model/category_model");

class CategoryController{
    getAllCategories = (req, res, next) => {
          Category.find()
          .populate("parent_id")
          .then((categories) => {
              res.json({
                  result: categories,
                  status: true,
                  msg: "List Succesfull"
              });
          }) 
          .catch((error) => {
              let err = {
                  status: 200,
                  msg: JSON.stringify(error)
              }
              next(err);
          })   
    }

    addCategory = (req, res, next) => {
       let cat = new Category(req.body);

       cat.save()
       .then((success) => {
           res.json({
               result: cat,
               status: 200,
               msg: "Category added successfully"
           });
       })
       .catch((error) => {
           res.status(200).json({
               result: req.body,
               status: 400,
               msg: JSON.stringify(error)
           })
       })
       console.log("Data: ", req.body);
    }

    deleteCategoryById = (req, res, next) => {
        Category.deleteOne({
            _id: req.params.id
        })
        .then((success) => {
            res.json({
                result: JSON.stringify(success),
                status: 200,
                msg: "Category deleted successfully"
            })
        })
        .catch((err) => {
            res.json({
                result: null,
                status: 400,
                msg: JSON.stringify(err)
            })

        })
    }
}

module.exports = CategoryController;