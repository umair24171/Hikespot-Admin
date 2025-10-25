import React from 'react'
import './RidesHistory.css'
import { IoIosArrowForward } from 'react-icons/io';
import user from '../../../../assets/user1.png';
import { MdArrowOutward } from 'react-icons/md';

const RidesHistory = () => {
    return (
        <>
            <p className='rides-title'>Rides History</p>

            {/* <div className='ridesTable'>
                <div className="table-responsive">
                    <table className='rides-table table-borderless datatable rides-table'>
                        <thead className='rides-table-head text-center'>
                            <tr className='mt-5'>
                                <th scope='col'>Customer</th>
                                <th scope='col'>From</th>
                                <th scope='col'>Stepover</th>
                                <th scope='col'>To</th>
                                <th scope='col'>Ride Details</th>
                                <th scope='col'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='mb-5'>
                                <td className='text-center'>
                                    <img src={user} alt="Customer" className="user-img" />
                                    <div className="user-info">
                                        <p className="user-name">Maharrm Hasanli</p>
                                        <p className="user-number">+1 123 456 789 0</p>
                                        <p className="user-email">hasanalidriver@gmail.com</p>
                                    </div>
                                </td>
                                <td>309 S Peach St Bunnell, Florida(FL)</td>
                                <td>1601 29th St. Suite 1292 Boulder, CO 80301</td>
                                <td>8 Zircon Ct Palm Coast, Colorado(CL)</td>
                                <td>
                                    <p>25/05/2024 1:20PM</p>
                                    <p>Rating 4 Stars</p>
                                </td>
                                <td>
                                    <p>Status: <b className='rides-status'>Ride Completed</b></p>
                                </td>
                            </tr>
                            <tr className='mb-5'>
                                <td className='text-center'>
                                    <img src={user} alt="Customer" className="user-img" />
                                    <div className="user-info">
                                        <p className="user-name">Maharrm Hasanli</p>
                                        <p className="user-number">+1 123 456 789 0</p>
                                        <p className="user-email">hasanalidriver@gmail.com</p>
                                    </div>
                                </td>
                                <td>309 S Peach St Bunnell, Florida(FL)</td>
                                <td>1601 29th St. Suite 1292 Boulder, CO 80301</td>
                                <td>8 Zircon Ct Palm Coast, Colorado(CL)</td>
                                <td>
                                    <p>25/05/2024 1:20PM</p>
                                    <p>Rating 4 Stars</p>
                                </td>
                                <td>
                                    <p>Status: <b className='rides-status'>Ride Completed</b></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> */}


            <div className="table-responsive mt-3">
                <table className='table v-align'>
                    <thead className='thead-dark text-center'>
                        <tr>
                            <th className='col-customer'>Customer</th>
                            <th className='col-from'>From</th>
                            <th className='col-stepover'>Stepover</th>
                            <th className='col-to'>To</th>
                            <th className='col-details'>Ride Details</th>
                            <th className='col-car'>Status</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className='mb-5'>
                            <td className='text-center col-driver'>
                                <div className="user-cell">
                                    <img src="https://s3-alpha-sig.figma.com/img/1986/2999/e64eaaa6467b6dfacf82e6b3e1f74c88?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3AIU9zxQJSOVR9YNYu8bQ~dZFMs1~t7U-BxGI0MrEt2YW9iGJuIGdBajqWnfTEcHFqihf3layMf8OODNBgyaaSP-NOGu9dmZZ6SttLqM31-bJcicxtUB-ysXM9ZgyM4rTd6B45kGQVPEGwvRKy~5QCVsMB8ApAHH6m1EAcrHPzPVJM-e0uRMELakD7K89rW8FckSkzPSbuBsziNTSIoeVeY4zjqXmMfDdNj-xF8bONMbB5ultcTqpTmvq50CCFBlaEN06GsoM86X9DFeY8ARcpn6TdO8I4MGnBKKLpZ4s0W5LwYKHa-2wUVkDhznJfnho3o30~0oHi0gsrcf5mDUA__" alt="Driver" className="user-img" />
                                    <div className="user-info">
                                        <p className="user-name">Maharrm Hasanli</p>
                                        <p className="user-number">+1 123 456 789 0</p>
                                        <p className="user-email">hasanalidriver@gmail.com</p>
                                    </div>
                                </div>
                            </td>

                            <td className='col-from'>309 S Peach St Bunnell, Florida(FL)</td>
                            <td className='col-stepover'>1601 29th St. Suite 1292 Boulder, CO 80301</td>
                            <td className='col-to'>8 Zircon Ct Palm Coast, Colorado(CL)</td>
                            <td className='col-details'>
                                <p>ZAR 800</p>
                                <p>25/05/2024 1:20PM</p>
                                <p>Rating 4Stars</p>
                            </td>
                            <td className='col-car'>
                                <p>Status: <b className='status'>Completed</b></p>
                            </td>
                        </tr>
                     
                        
                        <tr className='mb-5'>
                            <td className='text-center col-driver'>
                                <div className="user-cell">
                                    <img src="https://s3-alpha-sig.figma.com/img/1986/2999/e64eaaa6467b6dfacf82e6b3e1f74c88?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3AIU9zxQJSOVR9YNYu8bQ~dZFMs1~t7U-BxGI0MrEt2YW9iGJuIGdBajqWnfTEcHFqihf3layMf8OODNBgyaaSP-NOGu9dmZZ6SttLqM31-bJcicxtUB-ysXM9ZgyM4rTd6B45kGQVPEGwvRKy~5QCVsMB8ApAHH6m1EAcrHPzPVJM-e0uRMELakD7K89rW8FckSkzPSbuBsziNTSIoeVeY4zjqXmMfDdNj-xF8bONMbB5ultcTqpTmvq50CCFBlaEN06GsoM86X9DFeY8ARcpn6TdO8I4MGnBKKLpZ4s0W5LwYKHa-2wUVkDhznJfnho3o30~0oHi0gsrcf5mDUA__" alt="Driver" className="user-img" />
                                    <div className="user-info">
                                        <p className="user-name">Maharrm Hasanli</p>
                                        <p className="user-number">+1 123 456 789 0</p>
                                        <p className="user-email">hasanalidriver@gmail.com</p>
                                    </div>
                                </div>
                            </td>

                            <td className='col-from'>309 S Peach St Bunnell, Florida(FL)</td>
                            <td className='col-stepover'>1601 29th St. Suite 1292 Boulder, CO 80301</td>
                            <td className='col-to'>8 Zircon Ct Palm Coast, Colorado(CL)</td>
                            <td className='col-details'>
                                <p>ZAR 800</p>
                                <p>25/05/2024 1:20PM</p>
                                <p>Rating 4Stars</p>
                            </td>
                            <td className='col-car'>
                                <p>Status: <b className='status'>Completed</b></p>
                            </td>
                        </tr>
                     
                        
                        <tr className='mb-5'>
                            <td className='text-center col-driver'>
                                <div className="user-cell">
                                    <img src="https://s3-alpha-sig.figma.com/img/1986/2999/e64eaaa6467b6dfacf82e6b3e1f74c88?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3AIU9zxQJSOVR9YNYu8bQ~dZFMs1~t7U-BxGI0MrEt2YW9iGJuIGdBajqWnfTEcHFqihf3layMf8OODNBgyaaSP-NOGu9dmZZ6SttLqM31-bJcicxtUB-ysXM9ZgyM4rTd6B45kGQVPEGwvRKy~5QCVsMB8ApAHH6m1EAcrHPzPVJM-e0uRMELakD7K89rW8FckSkzPSbuBsziNTSIoeVeY4zjqXmMfDdNj-xF8bONMbB5ultcTqpTmvq50CCFBlaEN06GsoM86X9DFeY8ARcpn6TdO8I4MGnBKKLpZ4s0W5LwYKHa-2wUVkDhznJfnho3o30~0oHi0gsrcf5mDUA__" alt="Driver" className="user-img" />
                                    <div className="user-info">
                                        <p className="user-name">Maharrm Hasanli</p>
                                        <p className="user-number">+1 123 456 789 0</p>
                                        <p className="user-email">hasanalidriver@gmail.com</p>
                                    </div>
                                </div>
                            </td>

                            <td className='col-from'>309 S Peach St Bunnell, Florida(FL)</td>
                            <td className='col-stepover'>1601 29th St. Suite 1292 Boulder, CO 80301</td>
                            <td className='col-to'>8 Zircon Ct Palm Coast, Colorado(CL)</td>
                            <td className='col-details'>
                                <p>ZAR 800</p>
                                <p>25/05/2024 1:20PM</p>
                                <p>Rating 4Stars</p>
                            </td>
                            <td className='col-car'>
                                <p>Status: <b className='status'>Completed</b></p>
                            </td>
                        </tr>
                     
                        
                        <tr className='mb-5'>
                            <td className='text-center col-driver'>
                                <div className="user-cell">
                                    <img src="https://s3-alpha-sig.figma.com/img/1986/2999/e64eaaa6467b6dfacf82e6b3e1f74c88?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3AIU9zxQJSOVR9YNYu8bQ~dZFMs1~t7U-BxGI0MrEt2YW9iGJuIGdBajqWnfTEcHFqihf3layMf8OODNBgyaaSP-NOGu9dmZZ6SttLqM31-bJcicxtUB-ysXM9ZgyM4rTd6B45kGQVPEGwvRKy~5QCVsMB8ApAHH6m1EAcrHPzPVJM-e0uRMELakD7K89rW8FckSkzPSbuBsziNTSIoeVeY4zjqXmMfDdNj-xF8bONMbB5ultcTqpTmvq50CCFBlaEN06GsoM86X9DFeY8ARcpn6TdO8I4MGnBKKLpZ4s0W5LwYKHa-2wUVkDhznJfnho3o30~0oHi0gsrcf5mDUA__" alt="Driver" className="user-img" />
                                    <div className="user-info">
                                        <p className="user-name">Maharrm Hasanli</p>
                                        <p className="user-number">+1 123 456 789 0</p>
                                        <p className="user-email">hasanalidriver@gmail.com</p>
                                    </div>
                                </div>
                            </td>

                            <td className='col-from'>309 S Peach St Bunnell, Florida(FL)</td>
                            <td className='col-stepover'>1601 29th St. Suite 1292 Boulder, CO 80301</td>
                            <td className='col-to'>8 Zircon Ct Palm Coast, Colorado(CL)</td>
                            <td className='col-details'>
                                <p>ZAR 800</p>
                                <p>25/05/2024 1:20PM</p>
                                <p>Rating 4Stars</p>
                            </td>
                            <td className='col-car'>
                                <p>Status: <b className='status'>Completed</b></p>
                            </td>
                        </tr>
                     
                        
                        <tr className='mb-5'>
                            <td className='text-center col-driver'>
                                <div className="user-cell">
                                    <img src="https://s3-alpha-sig.figma.com/img/1986/2999/e64eaaa6467b6dfacf82e6b3e1f74c88?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3AIU9zxQJSOVR9YNYu8bQ~dZFMs1~t7U-BxGI0MrEt2YW9iGJuIGdBajqWnfTEcHFqihf3layMf8OODNBgyaaSP-NOGu9dmZZ6SttLqM31-bJcicxtUB-ysXM9ZgyM4rTd6B45kGQVPEGwvRKy~5QCVsMB8ApAHH6m1EAcrHPzPVJM-e0uRMELakD7K89rW8FckSkzPSbuBsziNTSIoeVeY4zjqXmMfDdNj-xF8bONMbB5ultcTqpTmvq50CCFBlaEN06GsoM86X9DFeY8ARcpn6TdO8I4MGnBKKLpZ4s0W5LwYKHa-2wUVkDhznJfnho3o30~0oHi0gsrcf5mDUA__" alt="Driver" className="user-img" />
                                    <div className="user-info">
                                        <p className="user-name">Maharrm Hasanli</p>
                                        <p className="user-number">+1 123 456 789 0</p>
                                        <p className="user-email">hasanalidriver@gmail.com</p>
                                    </div>
                                </div>
                            </td>

                            <td className='col-from'>309 S Peach St Bunnell, Florida(FL)</td>
                            <td className='col-stepover'>1601 29th St. Suite 1292 Boulder, CO 80301</td>
                            <td className='col-to'>8 Zircon Ct Palm Coast, Colorado(CL)</td>
                            <td className='col-details'>
                                <p>ZAR 800</p>
                                <p>25/05/2024 1:20PM</p>
                                <p>Rating 4Stars</p>
                            </td>
                            <td className='col-car'>
                                <p>Status: <b className='status'>Completed</b></p>
                            </td>
                        </tr>
                     
                        

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default RidesHistory