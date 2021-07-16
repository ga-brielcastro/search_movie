import React from 'react';
// import ReactPaginate from 'react-paginate';

import './style.css';

// Itens da paginação
const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;


const Pagination = ({limit, total, offset, setOffset}) => {
    /**
     * limit: Quantos itens vai aparecer por página
     * total: Total de itens
     * offset: Quantidade de itens que vamos pular quando alterar a pagina
    */

    var current = offset ? (offset / limit) + 1 : 1;
    var pages = Math.ceil(total / limit);
    var first = Math.max(current - MAX_LEFT, 1);
    
    function onPageChange(page) {
        setOffset((page - 1) * limit)
        current = page
        console.log(current)
    }

    return (
        <div className="container_pagination">
            <ul>

                <li>
                    <button 
                        onClick={() => onPageChange(current - 1)} 
                        disabled={current === 1}>
                            Anterior
                    </button>
                </li>

                {Array.from({ length: Math.min(MAX_ITEMS, pages) })
                    .map((_, index) => index + first)
                    .map((page) => (
                        <li key={page}>
                            <button 
                                onClick={() => onPageChange(page)}
                                className={page === current ? "item--active" : null}>
                                {page}
                            </button>
                        </li>
                    )) }

                <li>
                    <button 
                        onClick={() => onPageChange(current + 1)} 
                        disabled={current === total}>
                            Próxima
                    </button>
                </li>

                

             </ul>
         </div>
    )
}

export default Pagination;