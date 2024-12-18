import { useState, useEffect } from 'react'
import apiClient from '../../backend/apiClient'

export const useCategories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true) 
  const [error, setError] = useState<Error | null>(null) 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiClient.get('/categories')
        setCategories(response.data)
      } catch (err) {
        if (err instanceof Error) {
          setError(err) 
        } else {
          setError(new Error('Algo salió mal')) 
        }
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return { categories, loading, error }
}
