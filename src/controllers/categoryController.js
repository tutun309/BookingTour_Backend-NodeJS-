import connectDb from '../config/connectDB'
import categoryService from '../services/categoryService'

let handleCreateCategory = async (req, res) => {
    if (req.body) {
        let data = await categoryService.createNewCategory(req.body);
        return res.status(200).json({
            errCode: data.errCode,
            mess: data.mess
        })
    }
}

let handleGetAllCategory = async (req, res) => {
    let users = await categoryService.getAllCategory();

    return res.status(200).json({
        users: users
    })
}

export default {
    handleCreateCategory,
    handleGetAllCategory
}