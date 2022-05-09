// import { reject, use } from 'bcrypt/promises';
// import bcrypt from 'bcryptjs';
// import db from "../models/index"
// const salt = bcrypt.genSaltSync(10);

// let createNewUser = async (data) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let hashPassword = await hashUserPassword(data.password);
//             console.log('pass::::::::::', hashPassword);
//             await db.User.create({
//                 email: data.email,
//                 password: hashPassword,
//                 firstName: data.firstName,
//                 lastName: data.lastName,
//                 address: data.address,
//                 roleID: data.roleId,
//                 gender: data.gender === "1" ? true : false,
//                 phonenumber: data.phoneNumber,
//             })
//             resolve('ok thanh cong');
//         } catch (error) {
//             reject(error)
//         }
//     })



//     // console.log('--------------');
//     // console.log(hashPassword);
// }

// let hashUserPassword = (password) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let hashPassword = await bcrypt.hashSync(password, salt);
//             resolve(hashPassword);
//         } catch (error) {
//             reject(error);
//         }
//     })
// }

// let getAllUser = () => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let users = await db.User.findAll({
//                 raw: true,
//             });
//             resolve(users);
//         } catch (error) {
//             console.log(error)
//         }
//     })
// }

// let getUserById = (userId) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let user = db.User.findOne({
//                 where: { id: userId },
//                 row: true
//             })
//             if (user) {
//                 resolve(user)
//             }
//             else resolve([])
//         } catch (error) {
//             reject(error)
//         }
//     })
// }

// export default {
//     createNewUser,
//     getAllUser,
//     getUserById
// }