import express from "express";
import userController from '../controllers/userController'
import categoryController from '../controllers/categoryController'
let router = express.Router();

const initWebRoute = (app) => {
    // router.get('/', homeController.getHomePage);
    // router.get('/about', homeController.getAboutPage);
    // router.get('/', homeController.getHomePage)
    // router.get('/crud', homeController.getCRUD)
    // router.post('/post-crud', homeController.postUser)
    // router.get('/get-crud', homeController.displayAllUser)
    // router.get('/edit-user', homeController.getEditUserPage)
    // router.post('/put-crud', homeController.updateUserPage)


    // router.get('/api/get-all-user', userController.handleGetAllUsers)
    // router.post('/api/create-new-user', userController.handleCreateNewUser)
    // router.put('/api/update-user', userController.handleUpdateNewUser)
    // router.delete('/api/delete-user', userController.handleDeleteUser)
    router.post('/api/user/login', userController.handleLogin)
    router.get('/api/get-all-user', userController.handleGetAllUsers)
    router.post('/api/user/create-new-user', userController.handleCreateNewUser)

    // ------------category---------
    router.post('/api/category/create-new-category', categoryController.handleCreateCategory)
    router.get('/api/category/get-all-category', categoryController.handleGetAllCategory)
    router.delete('/api/category/delete-category/:id', categoryController.handleDeleteCategoryById)
    router.post('/api/category/update-category', categoryController.handleUpdateCategory)
    router.get('/api/category/get-category/:id', categoryController.handleGetCategoryById)

    return app.use("/", router);
}
export default initWebRoute; 
