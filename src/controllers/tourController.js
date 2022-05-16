import connectDb from '../config/connectDB'
import tourService from '../services/tourService'

let handleCreateTour = async (req, res) => {
    let data = await tourService.createNewTour(req.body);
    return res.status(200).json(data);
}

let handleGetAllTour = async (req, res) => {
    let data = await tourService.getAllTour();
    return res.status(200).json(data);
}



export default {
    handleCreateTour,
    handleGetAllTour
}