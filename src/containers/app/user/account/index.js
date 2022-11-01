import React from 'react'
import UserInvestments from '../../../../components/cards/UserInvestments'
import Updates from '../../../../components/cards/Updates'
import History from '../../../../components/cards/History'
import BannerTwo from '../../../../components/BannerTwo'

export default function Account() {
  return (
    <div className='pt-20 bg-gray-100'>
      <BannerTwo />
      <Updates />
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-1/2 mb-12 xl:mb-0 px-4">
          <UserInvestments />
        </div>
        <div className="w-full xl:w-1/2 px-4">
          <History />
        </div>
      </div>
    </div>
  )
}
