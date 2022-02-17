import Head from 'next/head'

// Sections
import Landing from '@sections/Landing'
import RSVP from '@sections/RSVP'
import Registry from '@sections/Registry'
import Details from '@sections/Details'
import Answers from '@sections/Answers'
import Message from '@sections/Message'
import OurStory from '@sections/OurStory'
import Playlist from '@sections/Playlist'
import Footer from '@sections/Footer'
import PageSection from '@parts/PageSection'

import InnerWrapper from '@parts/InnerWrapper'
import Spotify_Playlist from '@parts/Spotify_Playlist'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Landing />
        <RSVP num={'01'} />
        <Details num={'02'} />
        <Message num={'03'} />
        <OurStory num={'04'} />
        <Registry num={'05'} />
        <Playlist num={'06'} />

        <Answers num={'07'} />
        <Footer />
      </main>

      <footer></footer>
    </div>
  )
}