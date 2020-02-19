import axios from "../utils/http"
import base from "./base"

const api = {
    /**
     * 登陆
     */
    login(params) {
        return axios.post(base.baseUrl + base.login, params);
    },
    /**
     * 商品查询接口
     */
    getSelectTbItemAllByPage(params) {
        return axios.get(base.baseUrl + base.selectTbItemAllByPage, {
            params
        })
    },
    /**
     * 商品类目接口
     */
    getSelectItemCategoryByParentId(params) {
        return axios.get(base.baseUrl + base.selectItemCategoryByParentId, {
            params
        })
    },
    /**
     * 添加产品接口
     */
    getInsertTbItem(params) {
        return axios.get(base.baseUrl + base.insertTbItem, {
            params: params
        })
    },
    /**
     * 删除产品接口
     */
    getDeleteItemById(params) {
        return axios.get(base.baseUrl + base.deleteItemById, {
            params: params
        })
    },
    /**
     * 产品预更新
     */
    getPreUpdateItem(params) {
        return axios.get(base.baseUrl + base.preUpdateItem, {
            params: params
        })
    },
    /**
     * 产品修改
     */
    getUpdateTbItem(params) {
        return axios.get(base.baseUrl + base.updateTbItem, {
            params: params
        })
    },
    /**
     * 规格参数 查询
     */
    getSelectItemParamAll(params) {
        return axios.get(base.baseUrl + base.selectItemParamAll, {
            params: params
        })
    },
    /**
     * 规格参数 添加
     */
    getInsertItemParam(params) {
        return axios.get(base.baseUrl + base.insertItemParam, {
            params: params
        })
    },
    /**
     * 规格参数 删除
     */
    getDeleteItemParamById(params) {
        return axios.get(base.baseUrl + base.deleteItemParamById, {
            params: params
        })
    },
    /**
     * 内容分类管理  查询
     */
    getSelectContentCategoryByParentId(params) {
        return axios.get(base.baseUrl + base.selectContentCategoryByParentId, {
            params: params
        })
    },
    /**
     * 内容分类管理  添加
     */
    getInsertContentCategory(params) {
        return axios.get(base.baseUrl + base.insertContentCategory, {
            params: params
        })
    },
    /**
     * 内容分类管理  删除
     */
    getDeleteContentCategoryById(params) {
        return axios.get(base.baseUrl + base.deleteContentCategoryById, {
            params: params
        })
    },
    /**
     * 内容分类管理 修改
     */
    getUpdateContentCategory(params) {
        return axios.get(base.baseUrl + base.updateContentCategory, {
            params: params
        })
    },
    /**
     * 内容分类管理内容 查询
     */
    getSelectTbContentAllByCategoryId(params) {
        return axios.get(base.baseUrl + base.selectTbContentAllByCategoryId, {
            params: params
        })
    },
    /**
    * 内容分类管理内容 添加
    */
    getInsertTbContent(params) {
        return axios.get(base.baseUrl + base.insertTbContent, {
            params: params
        })
    },
    /**
    * 内容分类管理内容 删除
    */
    getDeleteContentByIds(params) {
        return axios.get(base.baseUrl + base.deleteContentByIds, {
            params: params
        })
    }
}

export default api