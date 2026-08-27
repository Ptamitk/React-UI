import React from 'react'
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';

const users = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    intro: "akjhg ahgl  lkf glk l lfhglkhgerohi  ihr giohj i oig on",
    tag: "Satisfied"
  },
  {
    id: 2,
    img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
    intro: "fj gh hg fh gkfhg kjfghjh kfj hgkjhkg jghkhglksjghskj k  j hgk djhgkj",
    tag: "Underserved"
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
    intro: " fhgkejgkjeh kj h jk gkjgh kjfngkljng kjh kgj hk g jk gieortpoij i  ",
    tag: "Underbanked"
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1507206130118-b5907f817163?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
    intro: " euir gjerh gjihng ijhn gkljngklerj oi jgokrjngvkl nkjlgn kjrn kjn kjnl n k nkljn",
    tag: "Undertaker"
  },
  {
    id:5,
    img:"https://plus.unsplash.com/premium_photo-1668383207188-f5474588d674?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
    intro:" kjnfldkj lkd jl kljdklsj lkjdf lik jdflijwe0oifj oijio jfioj foijfoi j",
    tag:"Average",
  }

]
const App = () => {
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
