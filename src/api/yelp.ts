import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 0o0VM9tBpLt4Mo3KGTvc3mT1D4yrVUdcXvd-R8yQtPbN_0sYY1a-zNUiO2QrI4fwa9gGBXPruOsK6JH6KYBFqwh8XMrAWTsMM7oqr1KLwknYe5NiBwyTYfcf54WiX3Yx'
  }
})