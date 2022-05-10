import connectDb from '../config/connectDB'
import userService from '../services/userService'
let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    console.log(email, password);
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            mess: "khong dc de trong"
        })
    }

    let userData = await userService.handleLoginUser(email, password);

    return res.status(200).json({
        errCode: userData.errCode,
        mess: userData.mess,
        user: userData.user ? userData.user : {}
    })
}

let handleGetAllUsers = async (req, res) => {
    let id = req.query.id; //ALL, id
    if (!id) {
        return res.status(200).json({
            errCode: 3,
            mess: 'chua truyen id',
            user: {}
        })
    }
    let users = await userService.getAllUsers(id);
    return res.status(200).json({
        errCode: 0,
        mess: 'ok',
        user: users
    })

}

let handleCreateNewUser = async (req, res) => {
    let data = await userService.createNewUser(req.body);

    // console.log(data);
    return res.status(200).json({

        errCode: data.errCode,
        mess: data.mess
    }
    )
}

let handleDeleteUser = async (req, res) => {
    // let data = await userService.createNewUser(req.body);
    // console.log(data);

    if (!req.body.id) {
        return res.status(200).json({
            errCode: 3,
            mess: 'chua truyen id',
        })
    }
    let data = await userService.deleteUser(req.body.id);
    // console.log('>>>>>>>>>>>>>>check: ', data)
    return res.status(200).json({
        errCode: data.errCode,
        mess: data.mess
    })
}

let handleUpdateNewUser = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 3,
            mess: 'chua truyen id',
        })
    }
    let data = await userService.updateUser(req.body);
    return res.status(200).json({
        errCode: data.errCode
    })
}



export default {
    handleLogin,
    handleGetAllUsers,
    handleCreateNewUser,
    handleDeleteUser,
    handleUpdateNewUser
}