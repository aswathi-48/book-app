import { createSlice } from "@reduxjs/toolkit";

const AdminUser=createSlice({
    name:"Adminss",
    initialState:{
        adminData:[]
    },

    reducers:{
        // AdminValues:(state,action) => {
        //     // console.log();
        //     console.log('adminvalues',action);
        //     state.adminData.push(action.payload)
        // },
        
        removeBook:(state,action)=>{
            state.adminData = state.adminData.filter(book => book.id !== action.payload);
        }

    }
})

export const {removeBook} =AdminUser.actions
export default AdminUser.reducer