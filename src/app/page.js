import EndIng from '@/components/Ending/EndIng'
import Landing from '@/components/Landing'
import MeetOurTeam from '@/components/MeetOurTeam'
import OurSponser from '@/components/OurSponser'
import WhatWeDone from '@/components/WeHaveDone'
import WhoWeAre from '@/components/WhoWeAre'
import GenIntoch from '@/components/getintouch'
import Mentor from '@/components/mentors'
import Vision from '@/components/ourvision'


export default function Home() {
  return (
   <main>
    <Landing />
    <WhoWeAre />
    <MeetOurTeam />
    <OurSponser />
    <Mentor />
    <Vision />
    <WhatWeDone />
    <GenIntoch />
    <EndIng />


   </main>
  )
}
