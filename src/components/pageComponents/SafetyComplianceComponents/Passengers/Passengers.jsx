import React from 'react'
import './Passengers.css'
import { Link } from 'react-router-dom'
import { IoCall } from 'react-icons/io5';


const Passengers = () => {
  return (
    <>

      <div className='CaptainTable'>
        <div className="table-responsive mt-3">
          <table className='table v-align'>
            <tbody >
              <tr className='mb-5'>
                <td className='text-center col-driver'>
                  <div className="user-cell">
                    <img src="https://s3-alpha-sig.figma.com/img/1986/2999/e64eaaa6467b6dfacf82e6b3e1f74c88?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3AIU9zxQJSOVR9YNYu8bQ~dZFMs1~t7U-BxGI0MrEt2YW9iGJuIGdBajqWnfTEcHFqihf3layMf8OODNBgyaaSP-NOGu9dmZZ6SttLqM31-bJcicxtUB-ysXM9ZgyM4rTd6B45kGQVPEGwvRKy~5QCVsMB8ApAHH6m1EAcrHPzPVJM-e0uRMELakD7K89rW8FckSkzPSbuBsziNTSIoeVeY4zjqXmMfDdNj-xF8bONMbB5ultcTqpTmvq50CCFBlaEN06GsoM86X9DFeY8ARcpn6TdO8I4MGnBKKLpZ4s0W5LwYKHa-2wUVkDhznJfnho3o30~0oHi0gsrcf5mDUA__" alt="Driver" className="user-img" />
                    <div className="user-info">
                      <p className="user-name">Maharrm Hasanli</p>
                    </div>
                  </div>
                </td>
                <td className='col-from'>+1 123 456 789 0</td>
                <td className='col-stepover'>hasanalidriver@gmail.com</td>
                <td className='col-stepover'>
                  <Link to="/admin/call" >
                    <button className='captain-callBtn'>Ambulance
                      <IoCall size={20} className='captain-callBtn-icon' />
                    </button>
                  </Link>
                </td>
              </tr>
              <tr className='mb-5'>
                <td className='text-center col-driver'>
                  <div className="user-cell">
                    <img src="https://s3-alpha-sig.figma.com/img/1986/2999/e64eaaa6467b6dfacf82e6b3e1f74c88?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3AIU9zxQJSOVR9YNYu8bQ~dZFMs1~t7U-BxGI0MrEt2YW9iGJuIGdBajqWnfTEcHFqihf3layMf8OODNBgyaaSP-NOGu9dmZZ6SttLqM31-bJcicxtUB-ysXM9ZgyM4rTd6B45kGQVPEGwvRKy~5QCVsMB8ApAHH6m1EAcrHPzPVJM-e0uRMELakD7K89rW8FckSkzPSbuBsziNTSIoeVeY4zjqXmMfDdNj-xF8bONMbB5ultcTqpTmvq50CCFBlaEN06GsoM86X9DFeY8ARcpn6TdO8I4MGnBKKLpZ4s0W5LwYKHa-2wUVkDhznJfnho3o30~0oHi0gsrcf5mDUA__" alt="Driver" className="user-img" />
                    <div className="user-info">
                      <p className="user-name">Maharrm Hasanli</p>
                    </div>
                  </div>
                </td>
                <td className='col-from'>+1 123 456 789 0</td>
                <td className='col-stepover'>hasanalidriver@gmail.com</td>
                <td className='col-stepover'>
                  <Link to="/admin/call" >
                    <button className='captain-callBtn'>Ambulance
                      <IoCall size={20} className='captain-callBtn-icon' />
                    </button>
                  </Link>
                </td>
              </tr>
              <tr className='mb-5'>
                <td className='text-center col-driver'>
                  <div className="user-cell">
                    <img src="https://s3-alpha-sig.figma.com/img/1986/2999/e64eaaa6467b6dfacf82e6b3e1f74c88?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3AIU9zxQJSOVR9YNYu8bQ~dZFMs1~t7U-BxGI0MrEt2YW9iGJuIGdBajqWnfTEcHFqihf3layMf8OODNBgyaaSP-NOGu9dmZZ6SttLqM31-bJcicxtUB-ysXM9ZgyM4rTd6B45kGQVPEGwvRKy~5QCVsMB8ApAHH6m1EAcrHPzPVJM-e0uRMELakD7K89rW8FckSkzPSbuBsziNTSIoeVeY4zjqXmMfDdNj-xF8bONMbB5ultcTqpTmvq50CCFBlaEN06GsoM86X9DFeY8ARcpn6TdO8I4MGnBKKLpZ4s0W5LwYKHa-2wUVkDhznJfnho3o30~0oHi0gsrcf5mDUA__" alt="Driver" className="user-img" />
                    <div className="user-info">
                      <p className="user-name">Maharrm Hasanli</p>
                    </div>
                  </div>
                </td>
                <td className='col-from'>+1 123 456 789 0</td>
                <td className='col-stepover'>hasanalidriver@gmail.com</td>
                <td className='col-stepover'>
                  <Link to="/admin/call" >
                    <button className='captain-callBtn'>Ambulance
                      <IoCall size={20} className='captain-callBtn-icon' />
                    </button>
                  </Link>
                </td>
              </tr>
              <tr className='mb-5'>
                <td className='text-center col-driver'>
                  <div className="user-cell">
                    <img src="https://s3-alpha-sig.figma.com/img/1986/2999/e64eaaa6467b6dfacf82e6b3e1f74c88?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3AIU9zxQJSOVR9YNYu8bQ~dZFMs1~t7U-BxGI0MrEt2YW9iGJuIGdBajqWnfTEcHFqihf3layMf8OODNBgyaaSP-NOGu9dmZZ6SttLqM31-bJcicxtUB-ysXM9ZgyM4rTd6B45kGQVPEGwvRKy~5QCVsMB8ApAHH6m1EAcrHPzPVJM-e0uRMELakD7K89rW8FckSkzPSbuBsziNTSIoeVeY4zjqXmMfDdNj-xF8bONMbB5ultcTqpTmvq50CCFBlaEN06GsoM86X9DFeY8ARcpn6TdO8I4MGnBKKLpZ4s0W5LwYKHa-2wUVkDhznJfnho3o30~0oHi0gsrcf5mDUA__" alt="Driver" className="user-img" />
                    <div className="user-info">
                      <p className="user-name">Maharrm Hasanli</p>
                    </div>
                  </div>
                </td>
                <td className='col-from'>+1 123 456 789 0</td>
                <td className='col-stepover'>hasanalidriver@gmail.com</td>
                <td className='col-stepover'>
                  <Link to="/admin/call" >
                    <button className='captain-callBtn'>Ambulance
                      <IoCall size={20} className='captain-callBtn-icon' />
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Passengers