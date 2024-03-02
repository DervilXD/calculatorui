const apiUrl = import.meta.env.VITE_CALCULATOR_API_URL
export const calculateApi = async (a, b, operation) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ a: Number(a), b: Number(b), operation: operation })
        })
        if(!response.ok) {
                throw new Error("Network response was not ok")
        }
        const data = await response.json()
        return data.result
    } catch (error) {
        console.error('Error calculating:', error)
    }
}