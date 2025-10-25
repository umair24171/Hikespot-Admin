import React from 'react'
import './CaptainDetails.css'
import { FaArrowLeft } from "react-icons/fa6";
import user from '../../../../assets/user1.png'
import { VscVerifiedFilled } from "react-icons/vsc";
import Ranking from './../Rankings/Ranking';
import ServicesType from '../ServicesType/ServicesType';
import Ratings from './../Ratings/Ratings';
import BookedRides from '../BookedRides/BookedRides';
import PerformanceMatrics from './../PerformanceMatrics/PerformanceMatrics';
import RidesHistory from '../RidesHistory/RidesHistory';

const CaptainDetails = () => {

  const { id } = useParams(); // Get the ID from the URL
  const [captain, setCaptain] = useState(null);

  useEffect(() => {
    const fetchCaptain = async () => {
      try {
        const docRef = doc(fireDB, 'users', id); // Reference to the document
        const docSnap = await getDoc(docRef); // Get the document
        console.log(docSnap)
        if (docSnap.exists()) {
          setPassenger(docSnap.data()); // Set the passenger data
        } else {
          console.error('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };
    fetchCaptain();
    console.log("user detail", passenger)
  }, [id]);

  if (!captain) {
    return <h3>Loading...</h3>;
  }


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
          <div className="col-lg-4">
            <div className="box1">
              <img className='box1-img' src="https://s3-alpha-sig.figma.com/img/1986/2999/e64eaaa6467b6dfacf82e6b3e1f74c88?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NDI28xFxlvANeRYNCEpVHnHu20rEMdkucc-lJgRn8qlhqmcln0rP-4XlhnYw9gCWpO5rnwvuNPgx2b1lYM-9MDJVZlJWHW7NqFxIpcSuG8iQbfJsdzQQEpIXuWYfQ4~~lM3~v~HO7WYtmMqXszdK5U0g3T5~7PmPgKytd0~FPK6M0tx8KciFV9oT4u9Tx0cd7WkFqqK13EPRgikjlmSLc3-TtD-KlmlK4b2-rAh0MLSVZoGESRk5PDRNU8iB2nPMf~B1XhD4OuQbQrJH9Do7i1XCFMD3NbIKnblyTb3fjeqZ5qeXSkd7dr80KGNnKO7lTdxLiTvDFu4VwX7fTI3p8Q__" alt="" />
              <h3 className='box1-heading '>{captain.firstname}{captain.lastname}
                <VscVerifiedFilled />
              </h3>
              <p className='box1-para'>{captain.phoneNumber}</p>
              <h4 className='box1-sub-heading'>{captain.email}</h4>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row">
              <h4 className='status'>Status Verified
                <VscVerifiedFilled />
              </h4>
              <div className="col-lg-6">
                <div className="box2">
                  <h4 className='box2-heading'>Vehicle Registration</h4>
                  <div className="row">
                    <div className="col-lg-6">
                      <img className='box2-img' src="https://s3-alpha-sig.figma.com/img/cdb3/a05d/9b77c990b648fab98cdf9a3e8a991e04?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lyreuHDzkH1eP9pkVn7BGNlfjcWta~uT5h5x-vC-ZDH-B5SyC~B2dAu1cAxB7uvO3-1lT0iURocqaStKcuUWIl2r~0RFPyXBwM6vK3DjKtjnh2bNweTHHyjajkLeahMdWreNSHKh1EaVLZlcNV5rdAokwHcReQb3UVyeAeXSRv6J72zY2XYI6jCEpVTXaC7wxi-kc8ZHCHcafWxbNN1D4G~UWlp-I-xRkSDJicYL8xtd~7nEToiHCUWS1rXRT6Z0ES18gm242ONvGszkGKdthojLGHgtnhMV3zt3a~nPJ4oDRY0JAXDg5y8Lj2ehv7Lw~K1vYcNMMD9xLEQHK~tIvw__" alt="" />
                    </div>
                    <div className="col-lg-6">
                      <img className='box2-img' src="https://s3-alpha-sig.figma.com/img/cdb3/a05d/9b77c990b648fab98cdf9a3e8a991e04?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lyreuHDzkH1eP9pkVn7BGNlfjcWta~uT5h5x-vC-ZDH-B5SyC~B2dAu1cAxB7uvO3-1lT0iURocqaStKcuUWIl2r~0RFPyXBwM6vK3DjKtjnh2bNweTHHyjajkLeahMdWreNSHKh1EaVLZlcNV5rdAokwHcReQb3UVyeAeXSRv6J72zY2XYI6jCEpVTXaC7wxi-kc8ZHCHcafWxbNN1D4G~UWlp-I-xRkSDJicYL8xtd~7nEToiHCUWS1rXRT6Z0ES18gm242ONvGszkGKdthojLGHgtnhMV3zt3a~nPJ4oDRY0JAXDg5y8Lj2ehv7Lw~K1vYcNMMD9xLEQHK~tIvw__" alt="" />
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-lg-6">
                <div className="box3">
                  <h4 className='box3-heading'>Driving License</h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <img className='box3-img' src="https://s3-alpha-sig.figma.com/img/88a3/ba16/e2fc72e647d2275d30c71626c75288d5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BEzMNh6xGgNYANY-V~WKFeyDtdqhLQ4OIvLbBivby7EG~2NMtVJ0Allajcmlab9OqnrVk48z7ynXLIfhELmQFzRWdG4dQ0tiNV6jQZ1FgZ84htg~sesuNnUwNvJr08I9jjRGMYh~zhWJpvTqTmM2TRAZc1gY~6ANkGjaVdqrM~lwH6ijTvtkofI7sFZsVdgVfxGEe7zBQgJvOkbxvlyikA5wQs4MABMxS07DTE385DWlZejLIOx5SuRVKgDoevkMXfHFHoknPo23wxju3jC-9QLM8W1YC0YYB5LMiWxXAJym-BJ9jBRAcStA~TTxbmRM-LffT72XOVrZTeXw99plgg__" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* -----------------------------------------------2--------------------------------------------- */}

        <Ranking />
        {/* -----------------------------------------------3--------------------------------------------- */}

        <div>
          <div className="row">
            <div className="col-lg-8">
              <ServicesType />

            </div>
            <div className="col-lg-4">
              <Ratings />
            </div>
          </div>

          {/* -----------------------------------------------4--------------------------------------------- */}


          <div cl assName="col-lg-12">
            <BookedRides />
          </div>
          {/* -----------------------------------------------5--------------------------------------------- */}


          <div cl assName="col-lg-12">
            <PerformanceMatrics />
          </div>
          {/* -----------------------------------------------6--------------------------------------------- */}

          <div className="col-lg-12">
            <RidesHistory />
          </div>

        </div>
      </div>
    </>
  )
}

export default CaptainDetails