import React from 'react';

const CommonPage = (props) => {
    
    return (
        <section className='flex flex-row h-screen'>
            <div className='bg-gray-50 md:fixed h-full w-20'>
                <div className='flex items-center justify-center h-3/4'>
                    <p className='text-black -rotate-90 uppercase tracking-widest text-sm font-bold'>{props.title}</p>
                </div>
                <div className=' h-32 flex flex-column items-center justify-evenly'>
                    <div >
                        <a href="https://www.facebook.com/mdmusfique.hassan" target='_blank'>
                            <i className="fab fa-facebook-f text-black text-sm "></i>
                        </a>

                    </div>
                    <div >
                        <a href="https://www.facebook.com/mdmusfique.hassan" target='_blank'>
                            <i className="fab fa-facebook-f text-black text-sm "></i>
                        </a>

                    </div>
                    <div >
                        <a href="https://www.facebook.com/mdmusfique.hassan" target='_blank'>
                            <i className="fab fa-facebook-f text-black text-sm "></i>
                        </a>

                    </div>
                   

                </div>
            </div>
            
            <div className=' w-full '>
                <div className='ml-20  '>
                {props.children}
                  
                </div>
            </div>
        </section>
    );
};

export default CommonPage;