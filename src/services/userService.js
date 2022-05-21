import { reject } from 'bcrypt/promises';
import db from '../models/index';


let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let checkEmail = await checkEmailUser(data.email);
            if (!data.email || !data.password) {
                resolve({
                    errCode: 3,
                    mess: 'khong dc de trong mail or pass'
                });
            }
            if (checkEmail.isChecked === true) {
                resolve({
                    errCode: 4,
                    mess: 'email da dc su dung'
                });
            }
            else {
                await db.User.create({
                    email: data.email,
                    password: data.password,
                    name: data.name,
                    address: data.address,
                    img: data.img,
                    vaitroId: data.vaitroId,
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

let checkEmailUser = (emailUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: emailUser },
                raw: true
                // attributes: ['email', 'address']
            })
            if (user) {
                return resolve({
                    isChecked: true,
                    user: user
                });
            }
            else {
                return resolve({
                    isChecked: false,
                    user: {}
                });
            }
        } catch (error) {
            reject(error);
        }
    })
}

let handleLoginUser = (email, pass) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkEmailUser(email);

            if (isExist.isChecked) {
                let isPassword;
                if (pass === isExist.user.password) {
                    isPassword = true;
                }
                else {
                    isPassword = false;

                }
                if (isPassword) {
                    isExist.user.img = isExist.user.img.toString();
                    userData.errCode = 0;
                    userData.mess = 'dang nhap thanh cong';
                    userData.user = isExist.user;
                    resolve(userData);
                }
                else {
                    userData.errCode = 2;
                    userData.mess = 'kiem tra lai tk or mk';
                    resolve(userData);
                }
            }
            else {
                userData.errCode = 1;
                userData.mess = 'khong ton tai nguoi dung'
                resolve(userData);
            }
        } catch (error) {
            reject(error);
        }
    })
}



let checkPasswordUser = (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: emailUser }
            })
            if (bcrypt.compareSync(pass, user.password)) {
                return true;
            }
            else {
                return false;
            }
        } catch (error) {
            reject(error);
        }
    })
}

let getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                attributes: {
                    exclude: ['password']
                }
            });
            if (users) {
                for (let i = 0; i < users.length; i++) {
                    users[i].img = users[i].img.toString();
                }
                resolve(users);
            }
        } catch (error) {
            reject(error);
        }
    })
}

let updateUser = (userInp) => {
    return new Promise(async (resolve, reject) => {
        try {

            await db.User.update({
                name: userInp.name,
                address: userInp.address,
                img: userInp.img,
                vaitroId: userInp.vaitroId,
            }, {
                where: { id: userInp.id }
            })
            resolve({
                errCode: 0,
                mess: 'ok'
            });
        } catch (error) {
            reject(error)
        }
    })

}

let getUserById = async (idInp) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: idInp },
                attributes: {
                    exclude: ['password']
                }
            })
            if (!user) {
                resolve({
                    errCode: 1,
                    mess: 'khong ton tai nguoi dung'
                })
            }
            else {
                user.img = user.img.toString();
                resolve(user);
            }
        } catch (error) {
            reject(error)
        }
    })
}

let deleteUserByid = (idInp) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: idInp }
            })
            if (!user) {
                resolve({
                    errCode: 1,
                    mess: 'khong ton tai danh muc'
                })
            }
            else {
                await db.User.destroy({
                    where: { id: idInp }
                })
                resolve({
                    errCode: 0,
                    mess: 'xóa thành công'
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}


export default {
    handleLoginUser,
    checkEmailUser,
    getAllUsers,
    createNewUser,
    updateUser,
    getUserById,
    deleteUserByid
}
