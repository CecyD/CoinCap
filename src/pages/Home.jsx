import React, {useEffect, useState} from 'react'
import {getCoins} from "../helpers/coinFetch"
import CoinTable from "../components/CoinTable"
import CoinPagination from '../components/CoinPagination'

import Loading from '../components/Loading'



const Home = () => {

    const [coins, setCoins] = useState({
        loading: true,
        datos: []
    })
    
    
    const [update, setUpdate]=useState(false);
    

    const [pagina,setPagina]=useState(0);
    

    useEffect(() => {
        
        getCoins(pagina).then((respuesta)=>{
            setCoins({
                loading:false,
                datos:respuesta
            })
        });
    
    }, [update, pagina]);
    
  return (
    <div className="container">
            <div className="row mt-5">
                <div className="col">
                    {
                        coins.loading
                        ? <Loading/>
                        : 
                        (
                            <>
                                <CoinTable
                                update={update}
                                setUpdate={setUpdate}
                                datos={coins.datos}
                                />
                                <CoinPagination pagina={pagina} setPagina={setPagina}/>
                            </>
                        )
                    }
                    
                </div>
            </div>
        </div>
  )
}

export default Home