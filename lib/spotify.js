const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN
// const playlist_code = process.env.SPOTIFY_PLAYLIST_CODE
// get token here: https://alecchen.dev/spotify-refresh-token/

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`
const PLAYLISTS_ENDPOINT = `https://api.spotify.com/v1/playlists/`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

// https://leerob.io/blog/spotify-api-nextjs
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })
  console.log(response)
  return response.json()
}

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken()

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const getPlaylist = async () => {
  console.log('In the beginning of getPlaylist')
  const { access_token } = await getAccessToken()
  const SELECTED_PLAYLIST_ENDPOINT = PLAYLISTS_ENDPOINT + `4WdpZIyWqFF9DJ228gPXcm`
  console.log(SELECTED_PLAYLIST_ENDPOINT)
  return fetch(SELECTED_PLAYLIST_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}
