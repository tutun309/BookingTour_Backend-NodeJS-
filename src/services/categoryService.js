import db from '../models/index';

let createNewCategory = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name || !data.img) {
                resolve({
                    errCode: 1,
                    mess: 'khong dc de trong ten va hinh anh'
                });
            }
            else {
                await db.Category.create({
                    name: data.name,
                    img: data.img,
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

let getAllCategory = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.Category.findAll();
            if (users) {
                for (let i = 0; i < users.length; i++) {
                    users[i].img = users[i].img.toString();
                }

                resolve(users);
            } else {
                reject(null);
            }
        } catch (error) {
            console.log(error);
        }
    });
}

export default {
    createNewCategory,
    getAllCategory
}
