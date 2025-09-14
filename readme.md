# Dotcom

The Pixelated Labs website.

This is implemented as a Cloudflare worker which provides redirects to the GitHub organisation and
public repositories.

# Routes

Each public repository has various redirect routes under the `/<repo>` path.

| Route                     | Target                                                           |
|---------------------------|------------------------------------------------------------------|
| `/`                       | `github.com/pixelatedlabs/:repo`                                 |
| `/license`                | `github.com/pixelatedlabs/:repo/blob/master/license.txt`         |
| `/releases`               | `github.com/pixelatedlabs/:repo/releases`                        |
| `/releases/latest`        | `github.com/pixelatedlabs/:repo/releases/latest`                 |
| `/releases/latest/:asset` | `github.com/pixelatedlabs/:repo/releases/latest/download/:asset` |
| `/releases/:tag`          | `github.com/pixelatedlabs/:repo/releases/:tag`                   |
| `/releases/:tag/:asset`   | `github.com/pixelatedlabs/:repo/releases/download/:tag/:asset`   |

A redirect to `github.com/pixelatedlabs` is used as a fallback.

# License

This is free and unencumbered software released into the public domain.
