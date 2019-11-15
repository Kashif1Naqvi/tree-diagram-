let  dim =   { height:500 , width:1100 };
let svg  =  d3.select(".canvas").append("svg").attr("height",dim.height + 100).attr("width",dim.width + 100);
let graph = svg.append("g").attr("transform","translate(50,50)");
let data = []
const stratify = d3.stratify()
.id(d => d[name])
.parentId(d => d[parent])     
const tree = d3.tree().size([dim.width , dim.height])
const update = (data) => {
 
    
    const rootNode = stratify([data])
    const treeData = tree(rootNode)
    const nodes = graph.selectAll(".node").data(treeData.descendants())
    
}
db.collection("employees").onSnapshot(res=>{
  res.docChanges().forEach(change=>{
    let doc = {...change.doc.data(), id:change.doc.id}
    switch(change.type){
      case "added":
        data.push(doc)
      break;
      case 'modified':
        const index = data.findIndex(item => item.id == doc.id)
        data[index] = doc;
      break;
      case 'removed':
        data = data.filter(item=> item.id !== doc.id);
      break;
      default:
        break;
    }
  });
  update(data)
})
