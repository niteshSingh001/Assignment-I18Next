import { useTranslation } from 'react-i18next'
import './App.css'
import LanguageSelector from './components/LanguageSelector';

function App() {
  const {t}=useTranslation();
  return (
    <div className='container'>
      <LanguageSelector/>
      <p>Paragraph:{t("enterCredentials")}</p>
      <h1>Username:{t("username")}</h1>
      <h2>Password:{t("password")}</h2>
      <button>{t("signIn")}</button>
    </div>
  )
}

export default App
