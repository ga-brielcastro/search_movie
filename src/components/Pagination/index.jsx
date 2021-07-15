import React from 'react';


// Itens da paginação
const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;
const MAX_RIGHT = (MAX_ITEMS - 1) / 2; 


const Pagination = ({limit, total, offset}) => {
    /**
     * limit: Quantos itens vai aparecer por página
     * total: Total de itens
     * offset: Quantidade de itens que vamos pular quando alterar a pagina
    */

    const current = offset ? (offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const first = Math.max(current - MAX_LEFT, 1);
    
    return (
        <div>
            <ul>
                {Array.from({ length: MAX_ITEMS })
                    .map((_, index) => index + first)
                    .map((page) => (
                        <li>{page}</li>
                    )) }
            </ul>
        </div>
    )
}

export default Pagination;