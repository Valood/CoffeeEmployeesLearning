import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api',
        prepareHeaders: (headers) => {
            const token =  localStorage.getItem('token');
            if(token){
                headers.set('Authorization', `Bearer ${token}`)
            }
        },
    }),
    tagTypes: ['PROFILE', 'LECTURE', 'TEST'],
    endpoints: build => ({
        registration: build.mutation({
            query: body => ({
                body,
                url: '/auth/register',
                method: 'POST'
            })
        }),
        login: build.mutation({
            query: body => ({
                body,
                url: '/auth/login',
                method: 'POST'
            })
        }),
        getLectures: build.query({
            query: () => '/lectures',
            providesTags: ['LECTURE']
        }),
        getLectureContent: build.query({
            query: id => `/lectures/${id}`
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
                url: '/lectures',
                method: 'POST'
            }),
            invalidatesTags: ['LECTURE']
        }),
        getTest: build.query({
            query: () => `/test`,
            providesTags: ['TEST']
        }),
        sendTest: build.mutation({
            query: body => ({
                body,
                url: '/test/check',
                method: 'POST',
            }),
            invalidatesTags: ['TEST', 'PROFILE']
        }),
    })
})

export const {
    useRegistrationMutation,
    useLoginMutation,
    useGetLecturesQuery,
    useGetLectureContentQuery,
    useGetUserInfoQuery,
    useChangeProfileMutation,
    useGetUserStatisticsQuery,
    useGetOtherStatisticsQuery,
    useAddLectureMutation,
    useGetTestQuery,
    useSendTestMutation
} = api
