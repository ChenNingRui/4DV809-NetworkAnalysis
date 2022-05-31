import './App.css';
import * as React from 'react';
import HomePage from './pages/HomePage.jsx';
import { postDataByKey } from'./api/Api';

function App() {
  const [episodesSelectedOne, setEpisodesSelectedOne] = React.useState('1');
  const [episodesSelectedTwo, setEpisodesSelectedTwo] = React.useState('23');
  const [dataOne, setDataOne] = React.useState(null);
  const [dataTwo, setDataTwo] = React.useState(null);
  const [kcoreOne, setKcoreOne] = React.useState('4');
  const [communityOne, setCommunityOne] = React.useState('Normal');
  const [visStyleOne, setVisStyleOne] = React.useState('Normal');
  const [kcoreTwo, setKcoreTwo] = React.useState(null);
  const [communityTwo, setCommunityTwo] = React.useState('Normal');
  const [visStyleTwo, setVisStyleTwo] = React.useState('Normal');
  const [filterListOne, setFilterListOne] = React.useState([]);
  const [filterListTwo, setFilterListTwo] = React.useState([]);

  React.useEffect(() => {
    postDataByKey(episodesSelectedOne, setDataOne);
    postDataByKey(episodesSelectedTwo, setDataTwo);
    setFilterListOne([]);
    setFilterListTwo([]);
  },[episodesSelectedOne, episodesSelectedTwo]);

  React.useEffect(() => {
      setDataOne(dataOne);
    }, [kcoreOne, communityOne, visStyleOne]);

  React.useEffect(() => {
    setDataTwo(dataTwo);
  }, [kcoreTwo, communityTwo, visStyleTwo]);

  return (
    <div className="App">
      {dataOne && dataTwo && (
        <HomePage
          dataOne={dataOne}
          dataTwo={dataTwo}
          filterListOne={filterListOne}
          setFilterListOne={setFilterListOne}
          filterListTwo={filterListTwo}
          setFilterListTwo={setFilterListTwo}
          episodesSelectedOne={episodesSelectedOne} 
          episodesSelectedTwo={episodesSelectedTwo}
          setEpisodesSelectedOne={setEpisodesSelectedOne}
          setEpisodesSelectedTwo={setEpisodesSelectedTwo}
          kcoreOne={kcoreOne}
          setKcoreOne={setKcoreOne}
          communityOne={communityOne}
          setCommunityOne={setCommunityOne}
          visStyleOne={visStyleOne}
          setVisStyleOne={setVisStyleOne}
          kcoreTwo={kcoreTwo}
          setKcoreTwo={setKcoreTwo}
          communityTwo={communityTwo}
          setCommunityTwo={setCommunityTwo}
          visStyleTwo={visStyleTwo}
          setVisStyleTwo={setVisStyleTwo}
        />
      )}
    </div>
  );
}

export default App;
