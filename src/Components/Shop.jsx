import React from 'react'
import Mobiles from './Mobiles'
import { useAuth0 } from '@auth0/auth0-react';


const Shop = ({mobiles,setMobiles,view,details,addtoCart}) => {

    
    const { loginWithRedirect, isAuthenticated} = useAuth0();

    const allMobiles = () => {
        setMobiles(Mobiles);
    }

    const filterBrand = (b) => {
        const update = Mobiles.filter(f => {
            return f.brand === b
        })
        setMobiles(update)
    }

  return (
    <>
    <main className='shop mt-5 pt-3'>
    <section className='container-fluid w-100 brands gradient '>
            <div className='d-flex flex-wrap justify-content-center align-items-center gap-5 mt-3 pt-5'>
                <div className='box cursor text-center' onClick={() => filterBrand("realme")}>
                    <img src="/images/brands/realme.jpg" alt="realme" width={80} />
                    <h5 className='py-3'>Realme</h5>
                </div>
                <div className='box cursor  text-center' onClick={() => filterBrand("huawei")}>
                    <img src="/images/brands/huawei.jpg" alt="huawei" width={80} height={80}/>
                    <h5 className='py-3'>Huawei</h5>
                </div>
                <div className='box cursor  text-center' onClick={() => filterBrand("apple")}>
                    <img src="/images/brands/apple.jpg" alt="apple" width={80} height={80}/>
                    <h5 className='py-3'>Apple</h5>
                </div>
                <div className='box cursor text-center' onClick={() => filterBrand("samsung")}>
                    <img src="/images/brands/samsung.jpg" alt="samsung" width={80} height={80} />
                    <h5 className='py-3'>Samsung</h5>
                </div>
                <div className='box cursor text-center' onClick={() => filterBrand("google")}>
                    <img src="/images/brands/google.jpg" alt="pixel" width={80} height={80}/>
                    <h5 className='py-3'>Google</h5>
                </div>
                <div className='box cursor  text-center' onClick={() => filterBrand("mi")}>
                    <img src="/images/brands/mi.jpg" alt="mi" width={80} />
                    <h5 className='py-3'>Mi</h5>
                </div>
            </div>
        </section>

        <section className='product'>
            <div className="d-flex  row">
                <div className="col-lg-3  filter ">
                        <h3 className='p-3 border-bottom'>Filter <i class="fa-solid fa-filter fs-4 ms-2"></i></h3>
                        <div className='category'>
                            
                            <div onClick={() => allMobiles()} >All Mobiles</div>
                                <div onClick={() => filterBrand("apple")}>Apple</div>
                                <div onClick={() => filterBrand("google")}>Goolge</div>
                                <div onClick={() => filterBrand("huawei")}>Huawei</div>
                                <div onClick={() => filterBrand("mi")}>Mi</div>
                                <div onClick={() => filterBrand("realme")}>Realme</div>
                                <div onClick={() => filterBrand("samsung")}>Samsung</div>
                       
                        </div>    
                </div>
                <div className="col-lg-9  mt-3">
                    <div className='allmobiles pt-5 gap-5 d-flex justify-content-center flex-wrap align-items-center'>
                        {
                            mobiles.map(m => (
                            <div className="box col-lg-3 shadow rounded-3" key={m.id}>
                                <div className="img-box p-5 d-flex justify-content-center">
                                    <img src={m.img} alt={m.title} width={200} height={200} className='align-center'/>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    {
                                        
                                        isAuthenticated ?
                                        <button className='btn btn-outline-dark me-3' onClick={() => addtoCart(m)}><i class="fas fa-shopping-cart"></i></button>
                                        :
                                        <button className='btn btn-outline-dark me-3' onClick={() => loginWithRedirect()}><i class="fas fa-shopping-cart"></i></button>
                                    }
                                     <button className='btn btn-outline-dark' data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => view(m) }><i class="fas fa-eye"></i></button>
                                </div>
                                <div className="detail m-auto p-3 w-100 ps-5">
                                    <h4>{m.title}</h4>
                                    <small>{m.ram}</small><br />
                                    <small>{m.cam}</small><br />
                                    <small>{m.bat}</small>
                                    <h5 className='pt-3'>&#8377; { m.price}</h5>
                                </div>
                                </div>
                            ) )
                        }
                    </div>  
                </div>
            </div>
        </section>
        
       
                        
                        <div className="modal modal-fullscreen" id="modalId" tabindex="-1"  aria-labelledby="modalTitleId" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content ">
                                    <div className="modal-header">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                        <div className="modal-body ">
                                            {
                                                details.map((m) => {
                                                    return(
                                                        <div className="box  shadow rounded-3" key={m.id}>
                                                            <div className=" img-box p-5 d-flex justify-content-center">
                                                                <img src={m.img} alt={m.title} width={200} height={250} className='align-center'/>
                                                            </div>
                                                            <div className='d-flex justify-content-center'>
                                                                {
                                            
                                                                    isAuthenticated ?
                                                                    <button className='btn btn-outline-dark me-3' onClick={() => addtoCart(m)}><i class="fas fa-shopping-cart"></i></button>
                                                                    :
                                                                    <button className='btn btn-outline-dark me-3' onClick={() => loginWithRedirect()}><i class="fas fa-shopping-cart"></i></button>
                                                                }
                                                            </div>
                                                            <div className="detail text-center  p-3 ">
                                                                <h4>{m.title}</h4>
                                                                <small>{m.ram}</small><br />
                                                                <small>{m.cam}</small><br />
                                                                <small>{m.bat}</small>
                                                                <h5 className='pt-3'>&#8377; { m.price}</h5>
                                                            </div>
                                                            </div>
                                                    )
                                                })
                                            }
                                        </div> 
                                </div>
                            </div>
                        </div>
                        
                        
                       

        
        
    </main>
    </>
  )
}

export default Shop