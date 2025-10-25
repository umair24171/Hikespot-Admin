import React, { useEffect, useState } from 'react'
import './VerificationRequest.css'
import { VscVerifiedFilled } from 'react-icons/vsc';
import { FaArrowLeft } from 'react-icons/fa6';
import { MdOutlineError } from "react-icons/md";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { fireDB } from '../../../../Firebase/FirebaseConfig';


const VerificationRequest = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [verificationRequest, setVerificationRequest] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const docRef = doc(fireDB, 'users', id); // Reference to the document
        const docSnap = await getDoc(docRef); // Get the document
        if (docSnap.exists()) {
          setVerificationRequest(docSnap.data()); // Set the passenger data
        } else {
          console.error('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };
    fetchRequest();
    console.log("user detail", verificationRequest)
    // console.log("user detail", verificationRequest.driverModel.carRegistrationBack)
  }, [id]);

  if (!verificationRequest) {
    return <h3>Loading...</h3>;
  }


  // verify document
  const handleVerify = async () => {
    try {
      const docRef = doc(fireDB, 'users', id);
      await updateDoc(docRef, {
        'driverModel.isVerified': true, // Update the isVerified field to true
        isRequestedDriver: true // Update the isRequestedDriver field to true

      });
      alert('Document Verified Successfully');
      navigate(-1); // Navigate back to the previous page after verification
    } catch (error) {
      console.error('Error updating document:', error);
      alert('Failed to verify the document');
    }
  };



  return (
    <>
      <div className='captain-details'>
        <div className=' d-flex align-items-center gap-5'>
          {/* icons */}
          <FaArrowLeft className='icon-captain' />
          {/* heading */}
          <h1 className='captain-heading'>Maharrm Hasanli Captain Profile</h1>
        </div>

        {/* -----------------------------------------------1--------------------------------------------- */}
        <div className='mt-3 row text-white'>
          <div className="col-lg-5">
            <div className="box1">
              <img className='box1-img' src={verificationRequest.imageUrl} alt="" />
              <h3 className='box1-heading '>{verificationRequest.firstname}{verificationRequest.lastname}</h3>
              <p className='box1-para'>{verificationRequest.phoneNumber}</p>
              <h4 className='box1-sub-heading'>{verificationRequest.email}</h4>
            </div>
          </div>


          <div className="col-lg-7">
            <div className="row">
              <h4 className='status'>Status Unverified</h4>

              <div className="col-lg-12">
                <div className="box2">
                  <h4 className='h4 fw-medium text-center'>Vehicle Registration</h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <img className='document-img' src={verificationRequest.driverModel.carRegistrationFront} alt="" />
                      <img className='document-img' src={verificationRequest.driverModel.carRegistrationBack} alt="" />
                      {/* <img className='document-img' src="https://s3-alpha-sig.figma.com/img/cdb3/a05d/9b77c990b648fab98cdf9a3e8a991e04?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qttM9ljqJild~fwUIjmdHwyJDz5Np173jn0Ow6jkMfBnOfEmoe55Ei68qVT4joYzXGvVPHgFpmU7hoccLAmMt51SE-q~a7p5oq7LwvDtbscCdLoYWkDcei9EgkbvDs3elxhFcOsvHiXBc3aF0xGg~p2cTUjrLYuc3TmmzF0cno~Qqc3dkpMbLonS-70JGUPrZ76zCaIBupyavJx9kyk4-9YOi~x6QJya3um-WNB9-5f7UNT-2RviLisVqujbeG1ZoqnfjyzRJTGWnKzN4vXVIW~slu0ZRqzZnpgUJzzLUoWwIvyIaIv4vXrdfiDDY2aO~sjOeWEnn2fwEsf3xGgQUA__" alt="" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='d-flex align-items-center justify-content-center gap-1 note-container'>
              <p className='note'>Note:</p>
              <p className='note-info'>
                For your kind information kindly view the
                documents carefully before clicking the
                verification button
              </p>
            </div>


            <button onClick={handleVerify} className='verify-btn fw-bolder'>Verify Document</button>
          </div>
        </div>

      </div >
    </>
  )
}

export default VerificationRequest