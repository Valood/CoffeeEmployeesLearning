import React, {useMemo} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {Loader} from "@mantine/core";

const RoleRequired = ({roles}) => {
    const navigate = useNavigate()
    // const {data, isLoading} = useUserInfoQuery()
    // const accessDenied = useMemo(
    //     () => !isLoading && !roles.includes(data.role),
    //     [data, isLoading, roles]
    // )


    if(isLoading){
        return <Loader size='xl'/>
    }
    if(accessDenied){
        return <div>Denied access page</div>
    }
    return (
        <Outlet/>
    );
};

export default RoleRequired;
