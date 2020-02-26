function dublicate(data){
  let counts = {};
  data.split('').forEach((x)=>{
    if(!counts[x]){
      counts[x] = 1
    }
    counts[x] = counts[x]+ 1; 
  })
  console.log(counts)
}
dublicate("zzebabababbcbcbcb");