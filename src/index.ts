// This is free and unencumbered software released into the public domain.

import { Hono } from 'hono'

const app = new Hono()
	.all('headcheck', (c) => c.redirect('https://github.com/pixelatedlabs/headcheck', 307))
	.all('*', () => new Response(undefined, { status: 427 }))

export default app
