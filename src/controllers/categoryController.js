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
    let categorys = await categoryService.getAllCategory();

    return res.status(200).json(categorys)
}

let handleDeleteCategoryById = async (req, res) => {
    let data = await categoryService.deleteCategoryByid(req.params.id);
    return res.status(200).json(data);
}

let handleUpdateCategory = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            mess: 'chua truyen id',
        })
    }
    let data = await categoryService.updateCategory(req.body);
    return res.status(200).json(data);
}

let handleGetCategoryById = async (req, res) => {
    let id = req.params.id;
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            mess: 'chua truyen id',
        })
    }
    let data = await categoryService.getCategoryById(id);
    return res.status(200).json(data);
}

export default {
    handleCreateCategory,
    handleGetAllCategory,
    handleDeleteCategoryById,
    handleUpdateCategory,
    handleGetCategoryById,

}