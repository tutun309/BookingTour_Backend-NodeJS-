import bookingService from '../services/bookingService';

let handleCreateBooking = async (req, res) => {
    let data = await bookingService.createNewBooking(req.body);
    return res.status(200).json(data);
}

let handleGetAllBooking = async (req, res) => {
    let data = await bookingService.getAllBooking(req.body);
    return res.status(200).json(data);
}

let handleGetBookingById = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            mess: 'chua truyen id',
        })
    }
    else {
        let data = await bookingService.getBookingById(id)
        return res.status(200).json(data);
    }

}

let handleGetBookingByUserId = async (req, res) => {
    let userId = req.params.userId;
    if (!userId) {
        return res.status(200).json({
            errCode: 1,
            mess: 'chua truyen id',
        })
    }
    else {
        let data = await bookingService.getBookingByUserId(userId)
        return res.status(200).json(data);
    }

}

let handleUpdateStatusBooking = async (req, res) => {
    let data = await bookingService.updateStatusBooking(req.body);
    return res.status(200).json(data);
}
export default {
    handleCreateBooking,
    handleGetAllBooking,
    handleGetBookingById,
    handleUpdateStatusBooking,
    handleGetBookingByUserId
}