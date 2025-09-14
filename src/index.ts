// This is free and unencumbered software released into the public domain.

import { Hono } from 'hono'

const build = (repo: string) => new Hono()
	.all(`/`, c => c.redirect(`https://github.com/pixelatedlabs/${repo}`, 307))
	.all(`/license`, c => c.redirect(`https://github.com/pixelatedlabs/${repo}/blob/master/license.txt`, 307))
	.all(`/releases`, c => c.redirect(`https://github.com/pixelatedlabs/${repo}/releases`, 307))
	.all(`/releases/latest`, c => c.redirect(`https://github.com/pixelatedlabs/${repo}/releases/latest`, 307))
	.all(`/releases/latest/:asset`, c => {
		const { asset } = c.req.param()
		return c.redirect(`https://github.com/pixelatedlabs/${repo}/releases/latest/download/${asset}`, 307)
	})
	.all(`/releases/:tag`, c => {
		const { tag } = c.req.param()
		return c.redirect(`https://github.com/pixelatedlabs/${repo}/releases/${tag}`, 307)
	})
	.all(`/releases/:tag/:asset`, c => {
		const { asset, tag } = c.req.param()
		return c.redirect(`https://github.com/pixelatedlabs/${repo}/releases/download/${tag}/${asset}`, 307)
	})

export default new Hono()
	.route('/duckdb', build('duckdb'))
	.route('/headcheck', build('headcheck'))
	.all('*', () => new Response(undefined, { status: 404 }))
