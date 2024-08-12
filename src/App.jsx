
import './App.css'
import Centi from './components/Centi';
import '@mantine/core/styles.css';
import Contain from './components/Contain';
import Flexing from './components/Flexing';
import Griding from './components/Griding';
import Grouping from './components/Grouping';
import Stacking from './components/Stacking';
import Checkboxing from './components/Checkboxing';
import FieldSetting from './components/FieldSetting';
import AutoComletion from './components/AutoComletion';
import MultiSelection from './components/MultiSelection';

function App() {

  return (
    <>
     <Centi/>
     <Contain/>
     <Flexing/>
     <Griding/>
     <Grouping/>
     <Stacking/>
     <Checkboxing/>
     <FieldSetting/>
     <AutoComletion/>
     <MultiSelection/>
    </>
  )
}

export default App
