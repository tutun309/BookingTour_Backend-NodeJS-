import bookingService from '../services/bookingService';

let handleCreateBooking = async (req, res) => {
    let data = await bookingService.createNewBooking(req.body);
    return res.status(200).json(data);
}

let handleGetAllBooking = async (req, res) => {
    let data = await bookingService.getAllBooking(req.body);
    return res.status(200).json(data);
}


export default {
    handleCreateBooking,
    handleGetAllBooking
}