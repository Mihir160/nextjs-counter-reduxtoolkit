import { Provider } from 'react-redux'
import Store from '../app/Store'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  )
}
