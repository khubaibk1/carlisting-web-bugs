import React from 'react'

const PageCount = () => {
  return (
    <div>
        
        <div class="w-[229px] h-[40px] flex items-center mt-4 ">
          <div class="w-[46px] flex justify-center items-center border-[1px] border-[#D3D3D6] rounded-l-[16px] py-[10px] px-[18px] bg-[#0866FC] text-white">
            <button>
              <span>1</span>
            </button>
          </div>
          <div class="w-[46px] flex justify-center items-center border-[1px] border-[#D3D3D6] py-[10px] px-[18px]">
            <button>
              <span>2</span>
            </button>
          </div>
          <div class="w-[46px] flex justify-center items-center border-[1px] border-[#D3D3D6] py-[10px] px-[18px]">
            <button>
              <span>...</span>
            </button>
          </div>
          <div class="w-[46px] flex justify-center items-center border-[1px] border-[#D3D3D6] py-[10px] px-[18px]">
            <button>
              <span>100</span>
            </button>
          </div>
          <div class="w-[46px] flex justify-center items-center border-[1px] border-[#D3D3D6] rounded-r-[16px] py-[10px] px-[18px]">
            <span>&gt;</span>
          </div>
        </div>
      </div>
      
    
  )
}

export default PageCount
