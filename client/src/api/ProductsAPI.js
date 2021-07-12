import { useState, useEffect } from 'react'
import axios from 'axios'


function ProductsAPI() {
    const [products, setProducts] = useState([])
    const [callback, setCallback] = useState(false)
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get(`/api/products?limit=${page * 9}&${category}&${sort}`)
            setProducts(res.data.products)
            setResult(res.data.result)
        }
        getProducts()
    }, [callback, category, sort, page])

    return {
        products: [products, setProducts],
        callback: [callback, setCallback],
        category: [category, setCategory],
        sort: [sort, setSort],
        page: [page, setPage],
        result: [result, setResult]
    }
}

export default ProductsAPI
