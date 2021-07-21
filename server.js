import app from './app.js'
import { port } from './config/environment.js'
import connectToDb from './db/connectToDb.js'

async function startApp() {
  try {
    await connectToDb()
    console.log('Success, the database has connected!')
    
    // ? .listen will listen to request when app is run
    app.listen(port, () => console.log('Express is now running'))
  } catch (e) {
    console.log('An error occurred...')
    console.log(e)
  }
}

startApp()