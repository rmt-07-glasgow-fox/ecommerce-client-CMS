import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3080',
  data: {
    access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsImlhdCI6MTYxMTA5MTI5N30.g41cEAOFnYy110MrRi6sy-LRKycyBXmfaM-OsMoD99Y'
  }
})

export default instance
