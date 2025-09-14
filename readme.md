<!-- This is free and unencumbered software released into the public domain -->

![Headcheck](doc/header.webp)

<div align=center>
	<a href=https://github.com/pixelatedlabs/dotcom/blob/master/license.txt>
		<img alt=License src=https://img.shields.io/github/license/pixelatedlabs/dotcom?style=for-the-badge></a>
	&nbsp;
	<a href=https://github.com/pixelatedlabs/dotcom/search?l=typescript>
		<img alt=Language src=https://img.shields.io/github/languages/top/pixelatedlabs/dotcom?style=for-the-badge></a>
</div>
<br>

The Pixelated Labs website.

This is implemented as a Cloudflare worker which provides redirects to the GitHub organisation and
public repositories.

# Routes

Each public repository has various redirect routes under the `/:repo` path.

| Route                     | Target                                                           |
|---------------------------|------------------------------------------------------------------|
| `/`                       | `github.com/pixelatedlabs/:repo`                                 |
| `/license`                | `github.com/pixelatedlabs/:repo/blob/master/license.txt`         |
| `/releases`               | `github.com/pixelatedlabs/:repo/releases`                        |
| `/releases/latest`        | `github.com/pixelatedlabs/:repo/releases/latest`                 |
| `/releases/latest/:asset` | `github.com/pixelatedlabs/:repo/releases/latest/download/:asset` |
| `/releases/:tag`          | `github.com/pixelatedlabs/:repo/releases/:tag`                   |
| `/releases/:tag/:asset`   | `github.com/pixelatedlabs/:repo/releases/download/:tag/:asset`   |

For example [pixelatedlabs.com/dotcom/license](https://pixelatedlabs.com/dotcom/license) redirects
to this repositories' license file.

A redirect to `github.com/pixelatedlabs` is used as a fallback.

# License

This is free and unencumbered software released into the public domain.

The header image is licensed from [Floris Siegers](https://unsplash.com/photos/5L3DAEaVzO0).
