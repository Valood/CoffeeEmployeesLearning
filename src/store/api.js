import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '',
        prepareHeaders: (headers) => {
            const token =  localStorage.getItem('token');
            if(token){
                headers.set('Authorization', `Bearer ${token}`)
            }
        },
    }),
    tagTypes: ['PROFILE', 'LECTURE'],
    endpoints: build => ({
        registration: build.mutation({
            query: body => ({
                body,
                url: '/registration',
                method: 'POST'
            })
        }),
        login: build.mutation({
            query: body => ({
                body,
                url: '/login',
                method: 'POST'
            })
        }),
        getLectures: build.query({
            query: () => '/lectures',
            providesTags: ['LECTURE']
        }),
        getLectureContent: build.query({
            query: id => `/lecture/${id}`
        }),
        getUserInfo: build.query({
            query: () => `/user`,
            providesTags: ['PROFILE']
        }),
        changeProfile: build.mutation({
            query: body => ({
                body,
                url: '/user',
                method: 'PATCH'
            }),
            invalidatesTags: ['PROFILE']
        }),
        getUserStatistics: build.query({
            query: () => `/statistics`
        }),
        getOtherStatistics: build.query({
            query: () => `/statistics/other`
        }),
        addLecture: build.mutation({
            query: body => ({
                body,
                url: '/lecture',
                method: 'POST'
            }),
            invalidatesTags: ['LECTURE']
        }),
        getTest: build.query({
            query: () => `/test`
        }),
        sendTest: build.mutation({
            query: body => ({
                body,
                url: '/test',
                method: 'POST'
            })
        }),
    })
})
