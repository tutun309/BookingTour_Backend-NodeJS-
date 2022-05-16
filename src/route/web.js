import express from "express";
import userController from '../controllers/userController'
import categoryController from '../controllers/categoryController'
import tourController from '../controllers/tourController'
let router = express.Router();

const initWebRoute = (app) => {

    router.post('/api/user/login', userController.handleLogin)
    router.get('/api/get-all-user', userController.handleGetAllUsers)
    router.post('/api/user/create-new-user', userController.handleCreateNewUser)

    // ------------category---------
    router.post('/api/category/create-new-category', categoryController.handleCreateCategory)
    router.get('/api/category/get-all-category', categoryController.handleGetAllCategory)
    router.delete('/api/category/delete-category/:id', categoryController.handleDeleteCategoryById)
    router.post('/api/category/update-category', categoryController.handleUpdateCategory)
    router.get('/api/category/get-category/:id', categoryController.handleGetCategoryById)

    //---------------tour----------------
    router.post('/api/tour/create-new-tour', tourController.handleCreateTour)
    router.get('/api/tour/get-all-tour', tourController.handleGetAllTour)

    return app.use("/", router);
}
export default initWebRoute; 
