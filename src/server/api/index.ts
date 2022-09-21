import { Router } from 'express'
import axios from 'axios'
import { JSDOM } from 'jsdom'

const apiRouter = Router()
const ax = axios.create({
  baseURL: 'http://localhost:5900/',
})

apiRouter.use(async (req, res, next) => {
  res.set('Content-Type', 'application/json')
  next()
})

apiRouter.get('/breeds/:id?', async (req, res) => {
  ax.get<Breeds>('/breeds')
    .then(async r => {
      const id = req.params.id
      
      if (id != undefined) {
        return res.status(302).send(r.data[id])
      }

      return res.status(200).send(r.data)
    })
    .catch(err => res.status(404).send(err)) 
})

export default apiRouter
