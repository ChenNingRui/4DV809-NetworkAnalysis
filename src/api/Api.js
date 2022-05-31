import axios from "axios";

const url = 'http://127.0.0.1:5000/';

export async function testGetRequest(){
    await axios.get(url)
        .then(response => {
            console.log(response.data);
            return 'okay';
        });
}

function createLabelPropagationCommunity(data){
  let res = {};
  data = data.replace(/\s*/g,"");
  data = data.replace(/["'{\[\]]/g,'')
  data = data.split('},');
  data[data.length - 1] = data[data.length - 1].replace("}",'');
  for(let i = 0; i < data.length; i++){
    data[i] = data[i].split(',');
    for(let j = 0; j < data[i].length; j++){
      res[data[i][j]] = i;
    }
  }

  return res;
}


export async function postDataByKey(key, callback){
    await axios.post(url + 'getDataByKey', {
        key: key,
      })
      .then(function (response) {
        response.data['label_propagation'] = createLabelPropagationCommunity(response.data['label_propagation']);
        callback(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
}