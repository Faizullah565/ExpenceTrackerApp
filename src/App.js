import './App.css';
import Current from './components/current/Current';
import IncomeExpence from './components/IncomeExpence/IncomeExpence';
import History from './components/history/History';
import NewTransaction from './components/NewTransaction/NewTransaction';
import Header from './components/header/header'

// import GlobalProvider
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    < >
      <GlobalProvider >
        <Header />
        <div className='container'>
          <Current />
          <IncomeExpence />
          <History />
          <NewTransaction />
        </div>
      </GlobalProvider >
    </>
  );
}

export default App;
