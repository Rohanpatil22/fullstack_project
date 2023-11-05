import React from 'react'

function Table() {
    
    let tableName=["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10"];
  return (
   <>
   <div className='grid grid-cols-5 gap-20 m-20 ' style={{height:"800px"}}>
        {
            tableName.map((item,index)=>(
                <div key={index} className='w-60 h-40 border-2 border-black font-bold text-3xl p-4 hover:bg-zinc-500 rounded-xl'>{item}</div>
            ))
        }
        <div></div>
   </div>
   
   </>
  )
}

export default Table