import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6';
import { MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './CapitalVerification.css'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { fireDB } from '../../../../Firebase/FirebaseConfig';
const CapitalVerification = () => {

    const [pendingRequests, setPendingRequests] = useState([]);

    useEffect(() => {
        const fetchPendingRequests = async () => {
            const usersCollection = collection(fireDB, 'users');
            const q = query(usersCollection, where('isRequestedDriver', '==', false));
            const querySnapshot = await getDocs(q);

            const requests = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setPendingRequests(requests);
            console.log(pendingRequests)
        };

        fetchPendingRequests();
    }, []);


    return (
        <>
            <div className='verification-details'>
                <div className=' d-flex align-items-center gap-5'>
                    {/* icons */}
                    <FaArrowLeft className='icon-captain' />
                    {/* heading */}
                    <h1 className='captain-heading'>Captain Verification Request</h1>
                </div>


                <h4 className='verification-heading'>{pendingRequests.length} Request(s) Pending</h4>
                <div className='VerificationTable'>
                    <div className="table-responsive">
                        <table className='table-verification table-borderless datatable captain-table'>
                            <tbody className='text-white'>
                                {pendingRequests.map(user => (
                                    <tr key={user.uid}>
                                        <td className='text-center' data-label="Profile">
                                            <img src={user.imageUrl || "default-image-url"} alt="Driver" className="user-img" />
                                            <p className="user-name">{user.firstname} {user.lastname}</p>
                                            <p className="user-name">{user.phoneNumber}</p>
                                            <p className="user-name">{user.email}</p>
                                        </td>
                                        <td>
                                            <div className='verify-box'>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <img className='verify-img' src={user.driverModel.carRegistrationFront} alt="Car Registration Front" />
                                                        <img className='verify-img' src={user.driverModel.carRegistrationBack} alt="Car Registration Back" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <Link to={`/admin/verification-request/${user.uid}`}>
                                                <button className='details-btn'>
                                                    See Details
                                                    <MdArrowForward />
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}


                                {/* <tr className=''>
                                    <td className='text-center' data-label="Profile">
                                        <img src="https://s3-alpha-sig.figma.com/img/1986/2999/e64eaaa6467b6dfacf82e6b3e1f74c88?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3AIU9zxQJSOVR9YNYu8bQ~dZFMs1~t7U-BxGI0MrEt2YW9iGJuIGdBajqWnfTEcHFqihf3layMf8OODNBgyaaSP-NOGu9dmZZ6SttLqM31-bJcicxtUB-ysXM9ZgyM4rTd6B45kGQVPEGwvRKy~5QCVsMB8ApAHH6m1EAcrHPzPVJM-e0uRMELakD7K89rW8FckSkzPSbuBsziNTSIoeVeY4zjqXmMfDdNj-xF8bONMbB5ultcTqpTmvq50CCFBlaEN06GsoM86X9DFeY8ARcpn6TdO8I4MGnBKKLpZ4s0W5LwYKHa-2wUVkDhznJfnho3o30~0oHi0gsrcf5mDUA__" alt="Driver" className="user-img" />
                                        <p className="user-name">Maharrm Hasanli</p>
                                        <p className="user-name">+1 123 456 789 0</p>
                                        <p className="user-name">hasanalidriver@gmail.com</p>
                                    </td>
                                    <td>
                                        <div className='verify-box'>
                                            <div className="row">
                                                <div className="col-lg-112">
                                                    <img className='verify-img' src="https://s3-alpha-sig.figma.com/img/cdb3/a05d/9b77c990b648fab98cdf9a3e8a991e04?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qttM9ljqJild~fwUIjmdHwyJDz5Np173jn0Ow6jkMfBnOfEmoe55Ei68qVT4joYzXGvVPHgFpmU7hoccLAmMt51SE-q~a7p5oq7LwvDtbscCdLoYWkDcei9EgkbvDs3elxhFcOsvHiXBc3aF0xGg~p2cTUjrLYuc3TmmzF0cno~Qqc3dkpMbLonS-70JGUPrZ76zCaIBupyavJx9kyk4-9YOi~x6QJya3um-WNB9-5f7UNT-2RviLisVqujbeG1ZoqnfjyzRJTGWnKzN4vXVIW~slu0ZRqzZnpgUJzzLUoWwIvyIaIv4vXrdfiDDY2aO~sjOeWEnn2fwEsf3xGgQUA__" alt="" />
                                                    <img className='verify-img' src="https://s3-alpha-sig.figma.com/img/cdb3/a05d/9b77c990b648fab98cdf9a3e8a991e04?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qttM9ljqJild~fwUIjmdHwyJDz5Np173jn0Ow6jkMfBnOfEmoe55Ei68qVT4joYzXGvVPHgFpmU7hoccLAmMt51SE-q~a7p5oq7LwvDtbscCdLoYWkDcei9EgkbvDs3elxhFcOsvHiXBc3aF0xGg~p2cTUjrLYuc3TmmzF0cno~Qqc3dkpMbLonS-70JGUPrZ76zCaIBupyavJx9kyk4-9YOi~x6QJya3um-WNB9-5f7UNT-2RviLisVqujbeG1ZoqnfjyzRJTGWnKzN4vXVIW~slu0ZRqzZnpgUJzzLUoWwIvyIaIv4vXrdfiDDY2aO~sjOeWEnn2fwEsf3xGgQUA__" alt="" />
                                                </div>

                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <Link to="/admin/details-passengers">
                                            <button className='details-btn'>
                                                See Details
                                                <MdArrowForward />
                                            </button>
                                        </Link>
                                    </td>
                                </tr> */}

                            </tbody>
                        </table>
                    </div>
                </div>




            </div>
        </>
    )
}

export default CapitalVerification