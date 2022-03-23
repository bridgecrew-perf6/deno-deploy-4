import { ConnInfo, serve } from 'https://deno.land/std@0.114.0/http/server.ts'

const author = Deno.env.get("AUTHOR")!

function handler(_req: Request, connInfo: ConnInfo) {
  const addr = connInfo.remoteAddr as Deno.NetAddr
  const ip = addr.hostname

  return new Response(`<p style='font-family: monospace'>Your IP address is <b>${ip}</b>.<br/>-${author}</p>`, {
    headers: { "content-type": "text/html" },
  })
}

console.log('Listening on http://localhost:8000')

serve(handler)
