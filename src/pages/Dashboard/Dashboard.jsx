import React from 'react';
import './Dashboard.css';
import Cards from '../../components/pageComponents/Dashboard/Cards/Cards';
import Earning from '../../components/pageComponents/Dashboard/Graphs/Earning';
import TopCaptains from '../../components/pageComponents/Dashboard/TopCaptains/TopCaptains';
import BookingTable from '../../components/pageComponents/Dashboard/BookingTable/BookingTable';

const Dashboard = () => {
    return (
        <section className="dashboard section">
            <div className="row">
                <div className="col-lg-8 text-white">
                    <Cards />

                    <div className="col-12">
                        <Earning />
                    </div>
                </div>
                <div className="col-lg-4 text-white">
                    <TopCaptains />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <BookingTable />
                </div>

            </div>
        </section>
    );
};

export default Dashboard;
