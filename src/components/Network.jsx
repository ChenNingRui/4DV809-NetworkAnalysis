import React from "react";
import Graph from "react-graph-vis";
import { v4 as uuidv4 } from 'uuid';

  const nodeMargin = 5;
  const communityColors = ["#ea5545", "#f46a9b", "#ef9b20", "#edbf33", "#ede15b", "#bdcf32", "#87bc45", "#27aeef", "#b33dc6"];
  const visColors = ["#00bfa0", "#b3d4ff", "#dc0ab4", "#ffa300", "#9b19f5", "#e6d800", "#50e991", "#0bb4ff", "#e60049"];
  
  function selectKcoreListByKcore(kcore, data){
    let res;
    switch(kcore){
      case '2':
        res = data['corek2'];
        break;
      case '4':
        res = data['corek4'];
        break;
      case '6':
        res = data['corek6'];
        break;
      default:
        res = null;
        break;
    }
    return res;
  }

  function selectVisStyleListByVisStyle(visStyle, data){
    let res;
    switch(visStyle){
      case 'PageRank':
        res = data['pagerank'];
        break;
      case 'Betweenness':
        res = data['betweenness'];
        break;
      default:
        res = null;
        break;
    }
    return res;
  }

  function filterNodes(node, kList, filterList){
    if(!kList) return true;
    let res = false;
    if(kList.indexOf(node.id) !== -1 && filterList.indexOf(node.id) === -1) {
      res = true;
    }
    return res;
  }

  function setBorderColorBySize(size){
    size = Math.round(size - 5);
    return !visColors[size] ? visColors[visColors.length - 1] : visColors[size];
  }

  function setBackgroundColorByCommunity(community, data, id){
    let color = '';
    switch(community){
      case 'Louvain Partition':
        color = communityColors[data['louvain_partition'][id]];
        break;
      case 'Label Propagation':
          let str = id.replace(/\s*/g,"");
          color = communityColors[data['label_propagation'][str]];
          break;
      default:
        color = "#d7e1ee";
        break;
    }
    return color;
  }


  function createData(data, community, visStyle){
    let nodes = [];
    let edges = [];

    for(let i = 0; i < data['nodeList'].length; i++){
      let margin = (!visStyle ? nodeMargin : (visStyle[i][1] * 200 + nodeMargin));
      let borderColor = setBorderColorBySize(margin);
      let bgColor = setBackgroundColorByCommunity(community, data, data['nodeList'][i]);
      nodes.push({id:data['nodeList'][i], label: data['nodeList'][i], shape: "box", margin: margin, color: { border: borderColor, background: bgColor}});
    }

    for(let i = 0; i < data['edgeList'].length; i++){
      // let label = data['edgeList'][i][0] + ' - ' + data['edgeList'][i][0];
      edges.push({from: data['edgeList'][i][0], to: data['edgeList'][i][1]});
    }

    return {nodes: nodes, edges: edges};
  };
 
  const options = {
    layout: {
      hierarchical: { 
        enabled: false,
        levelSeparation: 200,
        nodeSpacing: 400,
        blockShifting: true,
        edgeMinimization: false,
        sortMethod: "hubsize"}
    },
    nodes: {
      borderWidth: 2
    },
    edges: {
      arrows: {
        from: {
          enabled: false,
          scaleFactor: 0.7
        },
        to: {
          enabled: false
        },
      },
      length: 300
    },
    height: "380px"
  };

export default function Network({data, setData, kcore, community, visStyle, filterList}){
  let visStyleList = selectVisStyleListByVisStyle(visStyle, data);
  let graph = createData(data, community, visStyleList);
  let kList = selectKcoreListByKcore(kcore, data);

  const events = {
    select: function(event) {
      let { nodes } = event;
      if(nodes.length === 0) return;
      let index = 0;

      for(let i = 0; i < data['betweenness'].length; i++){
        if(data['betweenness'][i][0] === nodes[0]){
          index = i;
        }
      }

      alert('node: ' + nodes + '\n' + 
      'degree centrality: ' + data['degree_centrality'][nodes] + '\n' + 
      'label propagation: ' + data['label_propagation'][nodes.toString().replace(/\s*/g,"")] + '\n' + 
      'louvain partition: ' + data['louvain_partition'][nodes] + '\n' + 
      'closeness centrality: ' + data['closeness_centrality'][nodes] + '\n' + 
      'betweenness: ' + data['betweenness'][index][1] + '\n' + 
      'pagerank: ' + data['pagerank'][index][1] + '\n');
    },
  };

    return(
        <Graph
            key={uuidv4()}
            graph={{
              // nodes: graph.nodes.filter(n => filterNodes(n, kList, filterList)),
              nodes: graph.nodes.filter(n => filterNodes(n, kList, filterList)),
              edges: graph.edges
            }}
            options={options}
            events={events}
            getNetwork={network => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
    );
}