import { reject } from 'bcrypt/promises';
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

let updateCategory = async (categoryInp) => {
    return new Promise(async (resolve, reject) => {
        try {
            let category = await db.Category.findOne({
                where: { id: categoryInp.id }
            })
            if (!category) {
                resolve({
                    errCode: 1,
                    mess: 'khong ton tai danh muc'
                })
            }
            else {
                await db.Category.update({
                    name: categoryInp.name,
                    img: categoryInp.img
                },
                    {
                        where: { id: categoryInp.id }
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

let deleteCategoryByid = (idInp) => {
    return new Promise(async (resolve, reject) => {
        console.log('>>>>>>check:', idInp);
        try {
            console.log(">>>>>>>>>>>>>check:", idInp);
            let category = await db.Category.findOne({
                where: { id: idInp }
            })
            if (!category) {
                resolve({
                    errCode: 1,
                    mess: 'khong ton tai danh muc'
                })
            }
            else {
                await db.Category.destroy({
                    where: { id: idInp }
                })
                resolve({
                    errCode: 0,
                    mess: 'xoa thanh cong'
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

let getCategoryById = async (idInp) => {
    return new Promise(async (resolve, reject) => {
        try {
            let category = await db.Category.findOne({
                where: { id: idInp }
            })
            if (!category) {
                resolve({
                    errCode: 1,
                    mess: 'khong ton tai danh muc'
                })
            }
            else {
                category.img = category.img.toString();
                resolve(category);
            }
        } catch (error) {
            reject(error)
        }
    })
}
export default {
    createNewCategory,
    getAllCategory,
    updateCategory,
    deleteCategoryByid,
    getCategoryById
}

