import express, { type Request, type Response } from 'express'

const app = express()
const PORT = 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Helloo, TypeScript with Express!')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
