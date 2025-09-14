// This is free and unencumbered software released into the public domain.

import { Hono } from 'hono'

const app = new Hono()
	.all('/headcheck', (c) => c.redirect('https://github.com/pixelatedlabs/headcheck', 307))
	.all('/headcheck/license', (c) => c.redirect('https://github.com/pixelatedlabs/headcheck/blob/master/license.txt', 307))
	.all('/headcheck/releases', (c) => c.redirect('https://github.com/pixelatedlabs/headcheck/releases', 307))
	.all('/headcheck/releases/latest', (c) => c.redirect('https://github.com/pixelatedlabs/headcheck/releases/latest', 307))
	.all('/headcheck/releases/latest/:asset', (c) => {
		const { asset } = c.req.param()
		return c.redirect(`https://github.com/pixelatedlabs/headcheck/releases/latest/download/${asset}`, 307)
	})
	.all('/headcheck/releases/:tag', (c) => {
		const { tag } = c.req.param()
		return c.redirect(`https://github.com/pixelatedlabs/headcheck/releases/${tag}`, 307)
	})
	.all('/headcheck/releases/:tag/:asset', (c) => {
		const { asset, tag } = c.req.param()
		return c.redirect(`https://github.com/pixelatedlabs/headcheck/releases/download/${tag}/${asset}`, 307)
	})
	.all('*', () => new Response(undefined, { status: 427 }))

export default app
