import config from './config'
import { LocalStorage } from 'quasar'

const { backendAdapter } = config

const token = () => `Bearer ${LocalStorage.getItem('access_token')}`

const backendApi = {
  campaign: () => backendAdapter({
    url: 'campaign/1',
    method: 'get'
  }),
}

export default backendApi
