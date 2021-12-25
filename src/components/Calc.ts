const total = () => {
  setModal(true);
  let s = document.querySelectorAll('.container .check');
  let vv = _.map(s,(value,key) =>
      ({key:key, value:value.checked}))
  let zz = vv.filter((v,key)=> {
      return v.value === true
  })
  // 25以上（質問項目６から）は、左に行く（当てはまらない）と点数が高く、右へ行く（当てはまる）と点数が低い
  _.forEach(zz,(z) => {
      if(z.key % 5 === 0 && z.key >= 25){
          setChose(previousChose => previousChose + 5)
          console.log('5を足す')
      }else if(z.key % 5 === 1 && z.key >= 25){
          setChose(previousChose => previousChose + 4)
          console.log('4を足す')
      }else if(z.key % 5 === 2 && z.key >= 25){
          setChose(previousChose => previousChose +3 )
          console.log('3を足す')
      }else if(z.key % 5 === 3 && z.key >= 25){
          setChose(previousChose => previousChose +2 )
          console.log('2を足す')
      }else if(z.key % 5 === 4 && z.key >= 25){
          setChose(previousChose => previousChose +1 )
          console.log('1を足す')
  // 6以上（質問項目1から5）は、左に行く（当てはまらない）と点数が低く、右へ行く（当てはまる）と点数が高い
      }else if(z.key % 5 === 0 && z.key >= 5){
          setChose(previousChose => previousChose + 1)
          console.log('１を足す')
      }else if(z.key % 5 === 1 && z.key >= 5){
          setChose(previousChose => previousChose + 2)
          console.log('2を足す')
      }else if(z.key % 5 === 2 && z.key >= 5){
          setChose(previousChose => previousChose + 3)
          console.log('3を足す')
      }else if(z.key % 5 === 3 && z.key >= 5){
          setChose(previousChose => previousChose + 4)
          console.log('4を足す')
      }else if(z.key % 5 === 4 && z.key >= 5){
          setChose(previousChose => previousChose + 5)
          console.log('5を足す')
      }else{
          setChose(previousChose => previousChose + (z.key +1) )
          console.log(`${Number(z.key)+1}を足す`)
      }
　  })
}