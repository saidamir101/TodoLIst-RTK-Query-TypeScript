import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


interface Data{
    id:number
}

export const todos=createApi({
    reducerPath:"todos",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
    tagTypes:["Todos"],
    endpoints:(builder)=>({
        getData:builder.query<Data[], void>({
            query:()=>`data`,
            providesTags:['Todos']
        }),
        deluser:builder.mutation<void, number>({
            query:(id)=>({
                url:`data/${id}`,
                method:"DELETE"
            }),
            invalidatesTags: [{type:"Todos"}],
        }),
        chekuser:builder.mutation<void,any>({
            query:(newuser)=>({
                url:`data/${newuser.id}`,
                method:'PUT',
                body:newuser
            }),
            invalidatesTags: [{type:"Todos"}],
        }),
        adduser:(builder).mutation<void,object>({
           query:(newuser)=>({
            url:`data`,
            method:"POST",
            body:newuser
           }),
           invalidatesTags:[{type:"Todos"}]
        }),
        edduser:(builder).mutation<void,Object>({
            query:(newuser)=>({
                url:`data/${newuser.id}`,
                method:"PUT",
                body:newuser
            }),
            invalidatesTags:[{type:"Todos"}]
        })



        
    })

})
export const{
    useGetDataQuery,
    useDeluserMutation,
    useChekuserMutation,
    useAdduserMutation,
    useEdduserMutation
    
    
}=todos