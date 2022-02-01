const router = require("express").Router();
const CategoryController = require("../controller/category_controller");

const isLoggedIn = require("../middleware.js/isLoggedIn");

const catController = new CategoryController();

router.route("/")
    .get(catController.getAllCategories)
    .post(isLoggedIn, catController.addCategory)

router.route("/parent")
    .get(isLoggedIn, catController.getAllParents)

router.route("/child/:id")
    .get(isLoggedIn, catController.getChildByParent)

router.route("/:id")
    .delete(isLoggedIn, catController.deleteCategoryById)
    .get(isLoggedIn, catController.getCategoryById)
    .put(isLoggedIn, catController.updateCategoryById)


module.exports = router;
