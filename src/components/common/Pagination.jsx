import React from 'react'


const Pagination = ({
  totalnews,
  newsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = []

  for (let i = 1; i <= Math.ceil(totalnews / newsPerPage); i++) {
    pages.push(i)
  }

  return (
    <div className='flex flex-wrap justify-center m-[16px]'>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={
              page === currentPage
                ? 'font-[900]  bg-slate-400 text-white h-[35px] w-[35px] rounded-3xl'
                : ' font-[600] text-[16px] px-[10px] mx-2 rounded-[6px] cursor-pointer text-zinc-950  '
            }
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}

export default Pagination
