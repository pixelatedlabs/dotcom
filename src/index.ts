// This is free and unencumbered software released into the public domain.

import { Hono } from 'hono'

const org = 'https://github.com/pixelatedlabs'

const build = (repo: string) => new Hono()
	.all(`/`, c => c.redirect(`${org}/${repo}`))
	.all(`/license`, c => c.redirect(`${org}/${repo}/blob/master/license.txt`))
	.all(`/releases`, c => c.redirect(`${org}/${repo}/releases`))
	.all(`/releases/latest`, c => c.redirect(`${org}/${repo}/releases/latest`))
	.all(`/releases/latest/:asset`, c => {
		const { asset } = c.req.param()
		return c.redirect(`${org}/${repo}/releases/latest/download/${asset}`)
	})
	.all(`/releases/:tag`, c => {
		const { tag } = c.req.param()
		return c.redirect(`${org}/${repo}/releases/${tag}`)
	})
	.all(`/releases/:tag/:asset`, c => {
		const { asset, tag } = c.req.param()
		return c.redirect(`${org}/${repo}/releases/download/${tag}/${asset}`)
	})

export default new Hono({ strict: false })
	.route('/dotcom', build('dotcom'))
	.route('/duckdb', build('duckdb'))
	.route('/headcheck', build('headcheck'))
	.all('*', c => c.redirect(org))
