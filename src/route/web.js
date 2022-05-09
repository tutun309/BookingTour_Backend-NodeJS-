import express from "express";
import userController from '../controllers/userController'
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

    return app.use("/", router);
}
export default initWebRoute; 
