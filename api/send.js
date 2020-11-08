import fetch from 'node-fetch'

const { WEBHOOK_URL } = process.env

export default async (req, res) => {
  if (req.headers['user-agent'] != 'EasyCron/1.0 (https://www.easycron.com/)') {
    return res.status(403).send('Only EasyCron can make this request!')
  }

  await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: 'https://www.youtube.com/watch?v=_zUh7tWXK1I @everyone',
      username: 'brian david gilbert',
      avatar_url:
        'https://yt3.ggpht.com/a/AATXAJz6LfABkrm7MAIG0LklQew95l02MxaOU4cRgGFQsQ=s240-c-k-c0xffffffff-no-rj-mo',
    }),
  })
  return res.status(200).send('Success!')
}
