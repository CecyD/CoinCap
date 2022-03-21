export const getCoins = async (pagina=0) => {
    const resp = await fetch(
      `https://api.coincap.io/v2/assets?api-key=31c3cf0b-e136-4a50-8e6f-e19494f52762&limit=10&offset=${pagina}`
    );
    const { data } = await resp.json();
    return data;
  };


export const getCoinId= async (id)=>{

  const resp=await fetch(`https://api.coincap.io/v2/assets/${id}`);

  const {data} =await resp.json();

  return data;

};

export const searchCoinByName = async (termino)=>{

  const resp=await fetch(`https://api.coincap.io/v2/assets?api-key=31c3cf0b-e136-4a50-8e6f-e19494f52762&search=${termino}&limit=10`);

  const {data}=await resp.json();

  return data;
}