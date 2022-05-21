import { status } from 'express/lib/response';
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
                    userId: bookingInp.user.id,
                    tourId: bookingInp.tour.id,
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
                attributes: ['id', 'date', 'status']
                // exclude: ['userId', 'tourId']
                ,
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

let getBookingById = (idInp) => {
    return new Promise(async (resolve, reject) => {
        try {
            let booking = await db.booking.findOne({
                where: { id: idInp },
                attributes: ['id', 'date', 'status']
                ,
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
                ],
            });
            if (booking) {
                booking.tour.img = booking.tour.img.toString();
            }
            resolve(booking)
        } catch (error) {
            reject(error)
        }
    })
}

let getBookingByUserId = (useridInp) => {
    return new Promise(async (resolve, reject) => {
        try {
            let bookings = await db.booking.findAll({

                attributes: ['id', 'date', 'status']
                ,
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
                ], where: { userId: useridInp },
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

let updateStatusBooking = (bookingInp) => {
    return new Promise(async (resolve, reject) => {
        try {
            let booking = await db.booking.findOne({
                where: { id: bookingInp.id }
            })
            if (!booking) {
                resolve({
                    errCode: 1,
                    mess: 'khong ton tai chuyen di'
                })
            }
            else {
                await db.booking.update({
                    status: bookingInp.status
                },
                    {
                        where: { id: bookingInp.id }
                    })
                resolve({
                    errCode: 0,
                    mess: 'sua thanh cong'
                })
            }
        } catch (error) {
            reject(error)
        }
    });
}

export default {
    createNewBooking,
    getAllBooking,
    getBookingById,
    updateStatusBooking,
    getBookingByUserId
}