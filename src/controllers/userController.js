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
    let users = await userService.getAllUsers();
    return res.status(200).json(users)
}

let handleCreateNewUser = async (req, res) => {
    let data = await userService.createNewUser(req.body);
    return res.status(200).json({
        errCode: data.errCode,
        mess: data.mess
    })
}

let handleDeleteUser = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 3,
            mess: 'chua truyen id',
        })
    }
    let data = await userService.deleteUser(req.body.id);
    return res.status(200).json({
        errCode: data.errCode,
        mess: data.mess
    })
}

let handleUpdateUser = async (req, res) => {
    console.log('>>>>>>>>>>check', req.body.id);
    let data = await userService.updateUser(req.body);
    return res.status(200).json({
        errCode: data.errCode,
        mess: data.mess
    })
}

let handleGetUserById = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            mess: 'chua truyen id',
        })
    }
    let data = await userService.getUserById(id);
    return res.status(200).json(data);
}

let handleDeleteUserById = async (req, res) => {
    let data = await userService.deleteUserByid(req.params.id);
    return res.status(200).json(data);
}


export default {
    handleLogin,
    handleGetAllUsers,
    handleCreateNewUser,
    handleDeleteUser,
    handleUpdateUser,
    handleGetUserById,
    handleDeleteUserById
}