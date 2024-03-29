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

    getCategoryById = (req, res, next) => {
        Category.findById(req.params.id)
        .then((category) => {
            res.json({
                result: category,
                status: 200,
                msg: "Category found"
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

    getAllParents = (req, res, next) => {
        Category.find({
            parent_id: null
        })
        .then((cats) => {
            res.json({
                result: cats,
                status: 200,
                msg: "List successfull."
            })
        })
        .catch((error) => {
            res.json({
                result: null,
                status: 400,
                msg: JSON.stringify(error)
            })
        })
    }
    
    getChildByParent = (req, res, next) => {
        Category.find({
            parent_id: req.params.id
        })
        .then((cats) => {
            res.json({
                result: cats,
                status: 200,
                msg: "List successfull."
            })
        })
        .catch((error) => {
            res.json({
                result: null,
                status: 400,
                msg: JSON.stringify(error)
            })
        })
    }

    updateCategoryById = (req, res, next) => {
        Category.updateOne({
            _id: req.params.id
        },
        {
            $set: req.body
        }, {
            upsert: true
        })
        .then((sucess) => {
             res.json({
                 result: req.body,
                 status: 200,
                 msg: "Category updated succesfully"    
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