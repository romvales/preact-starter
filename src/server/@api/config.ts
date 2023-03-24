/**
 * config.ts (@migrate)
 * 
 * In the future the implementation of this route will be moved into a Go server.
 * For now it is going to be implemented here to reduce the time of going back and forth
 * during development.
 * 
 * Dependencies: `mongodb`
 */
import { MongoClient } from 'mongodb'
import { Request, Response, Router } from 'express'

const ATLAS_MONGO_URI = 'mongodb+srv://idream:sJyxwRLUZ92nC7A@dev0.kfcuqqb.mongodb.net/?retryWrites=true&w=majority'
const dbc = await init_mongo_db()


export async function setupConfigRoute(apiRouter: Router) {
  let _toUpdate: boolean
  let _cacheRemoteConfig: RemoteConfig


  // default collection
  const spec0 = dbc.db('dev0db').collection('spec0')

  const fetchConfig: () => Promise<RemoteConfig | any> = async () => {
    if (_cacheRemoteConfig === undefined || _toUpdate) {
      _toUpdate = false

      return await spec0.findOne<RemoteConfig>()
        .then(config => global.__remoteConfig = _cacheRemoteConfig = config)
        .catch(err => ({ error: err }))
        
    } else {
      return _cacheRemoteConfig
    }
  }

  await fetchConfig()

  apiRouter.get('/config', (req: Request, res: Response) => {
    const acceptHeader = req.headers.accept

    const resFunc = () => fetchConfig()
      .then(conf => Promise.resolve(conf))
      .catch(err => Promise.resolve({ error: err }))

    if (acceptHeader == 'text/event-stream') {
      sseConfig(resFunc, res)
    } else {
      resFunc().then(result => res.json(result))
    }

  })

  apiRouter.put('/config', async (req: Request, res: Response) => {
    _toUpdate = true
    fetchConfig()
      .then(() => res.status(200).json({ server_timestamp: Date.now(), message: 'Updated server remote config' }))
      .catch(() => res.status(500).json({ server_timestamp: Date.now(), error: 'Server timeout while updating config.' }))
  })

  apiRouter.post('/config', async (req: Request, res: Response) => {
    
  })

}

async function sseConfig(resFunc: () => Promise<RemoteConfig>, res: Response) {
  res.setHeader('X-Accel-Buffering', 'no')
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Connection', 'keep-alive')

  const refetch = async () => await resFunc()

  const sseInterval = setInterval(async () => {
    const result = await refetch()
    res.write(`data: ${JSON.stringify(result)}\n\n`) 
  }, 1500)

  res.on('close', () => {
    clearInterval(sseInterval)
    res.end()
  })
} 

async function init_mongo_db() {
  const client = new MongoClient(ATLAS_MONGO_URI)
  return await client.connect()
}