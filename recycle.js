function recycle(array) {
  let mats = ['paper', 'glass', 'organic', 'plastic'];
  let arr = [];
  let sorted = []
  for(let i=0; i<mats.length;i++){
    arr = [];
    for(let j=0;j<array.length;j++){
      if ((mats[i] === array[j].material)||(mats[i] === array[j].secondMaterial)) arr.push(array[j].type);
    }
    sorted[i]=arr;
  }
  return sorted;
}


console.log(recycle([
  {type: 'rotten apples', material: 'organic'},
  {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
  {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
  {type: 'amazon box', material: 'paper'},
  {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
]));

