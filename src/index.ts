// This is free and unencumbered software released into the public domain.

import { Hono } from 'hono'

const org = 'https://github.com/pixelatedlabs'

const build = (repo: string) => new Hono()
	.all(`/`, c => c.redirect(`${org}/${repo}`, 307))
	.all(`/license`, c => c.redirect(`${org}/${repo}/blob/master/license.txt`, 307))
	.all(`/releases`, c => c.redirect(`${org}/${repo}/releases`, 307))
	.all(`/releases/latest`, c => c.redirect(`${org}/${repo}/releases/latest`, 307))
	.all(`/releases/latest/:asset`, c => {
		const { asset } = c.req.param()
		return c.redirect(`${org}/${repo}/releases/latest/download/${asset}`, 307)
	})
	.all(`/releases/:tag`, c => {
		const { tag } = c.req.param()
		return c.redirect(`${org}/${repo}/releases/${tag}`, 307)
	})
	.all(`/releases/:tag/:asset`, c => {
		const { asset, tag } = c.req.param()
		return c.redirect(`${org}/${repo}/releases/download/${tag}/${asset}`, 307)
	})

export default new Hono()
	.route('/duckdb', build('duckdb'))
	.route('/headcheck', build('headcheck'))
	.all('*', c => c.redirect(org))
