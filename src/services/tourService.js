import { reject } from 'bcrypt/promises';
import db from '../models/index';

let createNewTour = (tourInp) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!tourInp.name || !tourInp.img || !tourInp.price) {
                resolve({
                    errCode: 1,
                    mess: 'khong dc de trong ten, hinh anh va gia'
                });
            }
            else {
                await db.Tour.create({
                    name: tourInp.name,
                    img: tourInp.img,
                    price: tourInp.price,
                    desc: tourInp.desc,
                    categoryId: tourInp.Category.id
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

let getAllTour = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let tours = await db.Tour.findAll({
                attributes: {
                    exclude: ['categoryId']
                },
                include: [{
                    model: db.Category,
                    as: 'Category',
                }]
            });
            if (tours) {
                for (let i = 0; i < tours.length; i++) {
                    tours[i].img = tours[i].img.toString();
                    tours[i].Category.img = tours[i].Category.img.toString();
                }

                resolve(tours)
            }
        } catch (error) {
            reject(error)
        }
    })
}

export default {
    createNewTour,
    getAllTour
}