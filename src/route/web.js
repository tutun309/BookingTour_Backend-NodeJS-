import express from "express";
import userController from '../controllers/userController'
import categoryController from '../controllers/categoryController'
import tourController from '../controllers/tourController'
import bookingController from '../controllers/bookingController'
let router = express.Router();

const initWebRoute = (app) => {

    router.post('/api/user/login', userController.handleLogin);
    router.get('/api/user/get-all-user', userController.handleGetAllUsers);
    router.post('/api/user/create-new-user', userController.handleCreateNewUser);
    router.post('/api/user/update-user', userController.handleUpdateUser);
    router.get('/api/user/get-user-by-id/:id', userController.handleGetUserById);
    router.delete('/api/user/delete-user/:id', userController.handleDeleteUserById);


    // ------------category---------
    router.post('/api/category/create-new-category', categoryController.handleCreateCategory);
    router.get('/api/category/get-all-category', categoryController.handleGetAllCategory);
    router.delete('/api/category/delete-category/:id', categoryController.handleDeleteCategoryById);
    router.post('/api/category/update-category', categoryController.handleUpdateCategory);
    router.get('/api/category/get-category/:id', categoryController.handleGetCategoryById);

    //---------------tour----------------
    router.post('/api/tour/create-new-tour', tourController.handleCreateTour);
    router.get('/api/tour/get-all-tour', tourController.handleGetAllTour);
    router.post('/api/tour/update-tour', tourController.handleUpdateTour);
    router.get('/api/tour/get-tour-by-id/:id', tourController.handleGetTourById);
    router.delete('/api/tour/delete-tour/:id', tourController.handleDeleteTourById);

    //----------------booking-------------
    router.post('/api/booking/create-new-booking', bookingController.handleCreateBooking);
    router.get('/api/booking/get-all-booking', bookingController.handleGetAllBooking);
    router.get('/api/booking/get-booking-by-id/:id', bookingController.handleGetBookingById);
    router.post('/api/booking/update-status-booking', bookingController.handleUpdateStatusBooking);
    router.get('/api/booking/get-booking-by-userid/:userId', bookingController.handleGetBookingByUserId);

    return app.use("/", router);
}
export default initWebRoute; 
