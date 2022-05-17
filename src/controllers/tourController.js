import req from 'express/lib/request';
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

let handleUpdateTour = async (req, res) => {
    if (req.body) {
        let data = await tourService.updateTour(req.body);
        return res.status(200).json(data);
    }
}

let handleGetTourById = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            mess: 'chua truyen id',
        })
    }
    let data = await tourService.getTourById(id);
    return res.status(200).json(data);
}

let handleDeleteTourById = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            mess: 'chua truyen id',
        })
    } else {
        let data = await tourService.deleteTourById(id);
        return res.status(200).json(data);
    }
}

export default {
    handleCreateTour,
    handleGetAllTour,
    handleUpdateTour,
    handleGetTourById,
    handleDeleteTourById
}