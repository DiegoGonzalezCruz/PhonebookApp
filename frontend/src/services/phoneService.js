import axios from "axios";
const baseUrl = '/api/persons'

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl)
        return response.data
    } catch (error) {
        console.log('There is an error in getAll')
    }
}

const create = async newObject => {
/*     try { */
        const response = await axios.post(baseUrl, newObject)
        return response.data
   /*  catch (error) {
        console.log('There is an error in create', error)
    } */
}

const update = (id, newObject) => {
    try {
        //console.log('from phoneservice',id, newObject)
        const response = axios.put(`${baseUrl}/${id}`, newObject)
        //console.log('from phoneservice',response)
        return response
    } catch (error) {
        console.log('There is an error in update')
    }
}

const deleteId = async (id) => {
    //console.log(id,'id desde vice')
    try {
        await axios.delete(`${baseUrl}/${id}`)
    } catch (error) {
        console.log(error)
        console.log('There is an error in delete phoneService')
    }
}

const phoneService = { getAll, create, update, deleteId }

export default phoneService