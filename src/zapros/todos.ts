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
        deluser:builder.mutation<void, any>({
            query:(id)=>({
                url:`data/${id}`,
                method:"DELETE"
            }),
            invalidatesTags: [{type:"Todos"}],
        })



        
    })

})
export const{
    useGetDataQuery,
    useDeluserMutation
    
}=todos