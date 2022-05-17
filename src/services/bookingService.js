import db from '../models/index';

let createNewBooking = (bookingInp) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!bookingInp) {
                resolve({
                    errCode: 1,
                    mess: 'khong dc de trong ten, hinh anh va gia'
                });
            }
            else {
                await db.booking.create({
                    userId: bookingInp.User.id,
                    tourId: bookingInp.Tour.id,
                    date: bookingInp.date,
                    status: bookingInp.status
                })
                resolve({
                    errCode: 0,
                    mess: 'ok'
                });
            }
        } catch (error) {
            reject(error)
        }
    })
}

let getAllBooking = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let bookings = await db.booking.findAll({
                attributes: {
                    exclude: ['userId', 'tourId']
                },
                include: [{
                    model: db.User,
                    as: 'user',
                    attributes: ['name', 'address']

                },
                {
                    model: db.Tour,
                    as: 'tour',
                    attributes: ['name', 'img', 'price']
                }
                ]
            });
            if (bookings) {
                for (let i = 0; i < bookings.length; i++) {
                    bookings[i].tour.img = bookings[i].tour.img.toString();
                }

                resolve(bookings)
            }
        } catch (error) {
            reject(error)
        }
    })
}
export default {
    createNewBooking,
    getAllBooking
}