import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import FileSearch from './components/FileSearch'
import FileList from './components/FileList';
import BottomBtn from './components/BottomBtn'
import defaultFiles from './utils/defaultFiles'
import { faPlus,faFileImport } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div className="App container-fluid px-0">
      <div className='row no-gutters'>
          <div className='col bg-light left-panel'>
           <FileSearch
           title='My Document s'
           onFileSearch={(value)=>{console.log(value,'vlue');}}/>
           <FileList 
            files={defaultFiles}
            onFileClick={(id)=>{console.log(id);}}
            onFileDelete={(id)=>{console.log('delete',id);}}
            onSaveEdit={(id,newValue)=>{console.log(id,newValue,'newValue');}}
            />
          <div className='row no-gutters'>
            <div className='col'>
              <BottomBtn
              text="新建"
              colorClass='btn-primary'
              icon={faPlus}
              />
            </div>
            <div className='col'>
              <BottomBtn
              text="导入"
              colorClass='btn-success'
              icon={faFileImport}
              />
            </div>
          </div>
          </div>
          <div className='col bg-primary right-panel'>
            <h1>this is right</h1>
          </div>
      </div>
    </div>
  );
}

export default App;
