# Dotcom

The Pixelated Labs website.

This is implemented as a Cloudflare worker which provides redirects to the GitHub organisation and
public repositories.

# Repository Routes

Each public repository has various redirect routes under the `/<repo>` path.

| Route                     | Target                                                                   |
|---------------------------|--------------------------------------------------------------------------|
| `/`                       | `https://github.com/pixelatedlabs/:repo`                                 |
| `/license`                | `https://github.com/pixelatedlabs/:repo/blob/master/license.txt`         |
| `/releases`               | `https://github.com/pixelatedlabs/:repo/releases`                        |
| `/releases/latest`        | `https://github.com/pixelatedlabs/:repo/releases/latest`                 |
| `/releases/latest/:asset` | `https://github.com/pixelatedlabs/:repo/releases/latest/download/:asset` |
| `/releases/:tag`          | `https://github.com/pixelatedlabs/:repo/releases/:tag`                   |
| `/releases/:tag/:asset`   | `https://github.com/pixelatedlabs/:repo/releases/download/:tag/:asset`   |

# License

This is free and unencumbered software released into the public domain.
