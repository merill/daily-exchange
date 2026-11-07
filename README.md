# daily-exchange

[daily.exchange.admin.news](https://daily.exchange.admin.news): a readable daily
record of what changed across Exchange Online documentation.

This repository holds the product: its configuration, its assets, and its
generated site. The generator, the workflows' steps and the test suite live in
[merill/dailynews-engine](https://github.com/merill/dailynews-engine).

## What it tracks

[`merill/exchange-docs-mirror`](https://github.com/merill/exchange-docs-mirror):
every Exchange Online and Exchange hybrid page on Microsoft Learn, rebuilt as
Markdown by [learn-mirror](https://github.com/merill/learn-mirror) four times a
day. Exchange publishes from `MicrosoftDocs/OfficeDocs-Exchange-pr`, which is not
public, so the mirror's history is the only change history there is. It begins
on 4 November 2026; the first commit is the initial import, and the archive
starts the day after.

| Folder | Learn path |
|---|---|
| `Exchange/ExchangeOnline` | `exchange/<rest>` |
| `Exchange/ExchangeHybrid` | `exchange/<rest>` |

Both docsets publish under the same `exchange/` path, so the folder is dropped.
The test suite checks that route against every URL the crawl fetched.

Areas are classified from the subfolder: mail flow, mailbox migration, hybrid,
standalone Exchange Online Protection, security and compliance, recipients and
address books, clients and mobile, collaboration and sharing, and monitoring.
Landing pages and `reference/` stay under Exchange Online.

msicons has no Exchange mark, so the site uses the Outlook mark, the closest
mail product mark it carries; `exchange-online` records that as `closest`.

## v1 has no email

`email: { enabled: false }`. The site is the whole product for now.

## Working on it

```bash
npm run engine:link     # links ../dailynews-engine into node_modules
npm run docs:clone      # clones the mirror into exchange-docs/
npm test
TZ=UTC npm run build:site
npm run dev
```

`TZ=UTC` matters: without it every date bucket shifts.

## Deploying

Cloudflare Pages, connected to this repository: production branch `main`, no
build command, output directory `website`. Repository secrets: `OPENAI_API_KEY`
(summaries); optionally `DISCORD_WEBHOOK_URL` and `HEALTHCHECKS_PING_URL`.
