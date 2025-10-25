import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6';
import './ViewDocument.css'
const ViewDocument = () => {
    return (
        <>
            <div className='captain-details'>
                <div className=' d-flex align-items-center gap-5'>
                    {/* icons */}
                    <FaArrowLeft className='icon-captain' />
                    {/* heading */}
                    <h1 className='captain-heading'>View Document</h1>
                </div>


                <div className="document-box">
                    <img className='document-full-img' src="https://s3-alpha-sig.figma.com/img/cdb3/a05d/9b77c990b648fab98cdf9a3e8a991e04?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qttM9ljqJild~fwUIjmdHwyJDz5Np173jn0Ow6jkMfBnOfEmoe55Ei68qVT4joYzXGvVPHgFpmU7hoccLAmMt51SE-q~a7p5oq7LwvDtbscCdLoYWkDcei9EgkbvDs3elxhFcOsvHiXBc3aF0xGg~p2cTUjrLYuc3TmmzF0cno~Qqc3dkpMbLonS-70JGUPrZ76zCaIBupyavJx9kyk4-9YOi~x6QJya3um-WNB9-5f7UNT-2RviLisVqujbeG1ZoqnfjyzRJTGWnKzN4vXVIW~slu0ZRqzZnpgUJzzLUoWwIvyIaIv4vXrdfiDDY2aO~sjOeWEnn2fwEsf3xGgQUA__" alt="" />
                </div>
            </div>
        </>
    )
}

export default ViewDocument