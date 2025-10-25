import React from 'react'
// import AdminContent from './../../components/AdminContent/AdminContent';
import Sidebar from './../../components/AdminSidebar/Sidebar/Sidebar';
import Header from './../../components/AdminHeader/Header/Header';
import { Outlet } from 'react-router-dom';
import './AdminLayout.css'


const AdminLayout = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main id='main' className='main'>
                <Outlet />
            </main>
        </>
    )
}

export default AdminLayout