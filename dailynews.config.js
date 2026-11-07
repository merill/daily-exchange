// Product configuration for Daily.Exchange.Admin.News.
//
// CommonJS rather than JSON because the classification rules are RegExps.
// Everything the engine needs that is specific to Exchange lives here; the code
// in @merill/dailynews-engine is product-neutral and reads from this file.
//
// The source is merill/exchange-docs-mirror. Exchange Online's documentation
// publishes from MicrosoftDocs/OfficeDocs-Exchange-pr, which is not public;
// learn-mirror rebuilds it from Microsoft Learn four times a day, one commit
// per crawl that found a change, at the path of the source file Learn built
// each page from.
//
// Two docsets are tracked: Exchange/ExchangeOnline and Exchange/ExchangeHybrid.
// Both publish under learn.microsoft.com/exchange/, so their folder prefix is
// dropped from the URL. Products come from the subfolder a page lives in.

const ICONS = 'https://github.com/DanielBradley1/msicons';

module.exports = {
  site: {
    name: 'Daily Exchange News',
    host: 'daily.exchange.admin.news',
    url: 'https://daily.exchange.admin.news',
    description: 'A readable record of what changed across Exchange Online documentation.',
    productName: 'Exchange Online',
    audience: 'Exchange Online administrators'
  },

  // v1 is the site alone: no subscriber email, no Kit workflow.
  email: { enabled: false },

  brand: {
    wordmark: 'Daily Exchange News',
    ogAlt: 'Daily Exchange News: Exchange Online change intelligence',
    themeStorageKey: 'exchange-news-theme',
    tokenStorageKey: 'exchange-news-github-token',
    emailEyebrow: 'Daily Exchange News',
    // msicons has no Exchange mark of its own; the site uses the Outlook mark,
    // the closest mail product mark it carries (recorded on exchange-online).
    logo: 'exchange-news-logo.png',
    aboutIcon: '/assets/products/exchange-online.svg',
    uiAssets: ['exchange-news-logo.png'],
    extraCss: ''
  },

  // Written into persisted state and published records. Never change these
  // once the site is live: see the engine README.
  identity: {
    docEventPrefix: 'exchange-docs',
    batchEventPrefix: 'exchange-news',
    kitMarkerPrefix: 'daily-exchange-news'
  },

  build: { docsCloneDir: 'exchange-docs', detailDays: 30 },

  discord: { botName: 'Exchange Scout' },

  ai: {
    schemaPrefix: 'exchange',
    subject: 'Exchange',
    forbiddenOpeners: ['Exchange Online documentation', 'Exchange documentation', 'The Exchange docs'],
    impactBoost: /mail flow|connector|migration|hybrid|transport rule|anti-spam|dkim|dmarc|smtp auth|retire|deprecat|basic auth|powershell/
  },

  docs: {
    source: { owner: 'merill', repo: 'exchange-docs-mirror', branch: 'main' },
    // Learn's rendered titles end in this; it is not part of the page's name.
    titleSuffix: / \| Microsoft Learn$/,
    learnRootUrl: 'https://learn.microsoft.com/en-us/exchange/',

    // Any article under the two docsets, except the fragment directories,
    // which are included into other pages and have no URL of their own.
    trackedPaths: /^(Exchange\/ExchangeOnline|Exchange\/ExchangeHybrid)\/(?!(?:.*\/)?(?:includes?|media|breadcrumb)\/).+\.md$/,

    // Both docsets publish at exchange/<rest>. Learn lowercases the path but
    // ignores case, so the mirror's mixed-case names resolve.
    learnRoutes: [
      { match: /^Exchange\/ExchangeOnline\/(.*)\.md$/, path: 'exchange/$1' },
      { match: /^Exchange\/ExchangeHybrid\/(.*)\.md$/, path: 'exchange/$1' }
    ],

    areas: {
      rules: [
        { match: /^Exchange\/ExchangeOnline\/mail-flow-best-practices\//, name: 'Mail flow' },
        { match: /^Exchange\/ExchangeOnline\/(mailbox-migration\/|get-new-mailbox-migration)/, name: 'Mailbox migration' },
        { match: /^Exchange\/ExchangeOnline\/(security-and-compliance|permissions-exo)\//, name: 'Security and compliance' },
        { match: /^Exchange\/ExchangeOnline\/(recipients-in-exchange-online|address-books)\//, name: 'Recipients and address books' },
        { match: /^Exchange\/ExchangeOnline\/(clients-and-mobile-in-exchange-online|accessibility)\//, name: 'Clients and mobile' },
        { match: /^Exchange\/ExchangeOnline\/(collaboration-exo|sharing)\//, name: 'Collaboration and sharing' },
        { match: /^Exchange\/ExchangeOnline\/monitoring\//, name: 'Monitoring and reports' },
        { match: /^Exchange\/ExchangeHybrid\/standalone-eop\//, name: 'Exchange Online Protection' },
        { match: /^Exchange\/ExchangeHybrid\//, name: 'Exchange hybrid' }
      ],
      fallback: 'Exchange Online'
    }
  },

  analytics: { piqoSite: '' },

  messageCenter: { servicePattern: /\bExchange Online\b/i },

  links: {
    related: [],
    footer: [],
    stayCurrent: [
      { url: 'https://learn.microsoft.com/en-us/exchange/whats-new', label: "What's new in Exchange Online" },
      { url: 'https://techcommunity.microsoft.com/category/exchange/blog/exchange', label: 'The Exchange Team Blog' }
    ],
    followProject: [
      { url: 'https://merill.net', label: 'merill.net' },
      { url: 'https://github.com/merill', label: 'GitHub' }
    ]
  },

  taxonomy: {
    products: [
      { slug: 'exchange-online', name: 'Exchange Online', short: 'Exchange Online', learn: 'https://learn.microsoft.com/en-us/exchange/exchange-online', icon: { sourceName: 'Microsoft Outlook', sourcePath: 'apps/Microsoft Outlook.svg', match: 'closest' } },
      { slug: 'mail-flow', name: 'Mail flow', short: 'Mail flow', learn: 'https://learn.microsoft.com/en-us/exchange/mail-flow-best-practices/mail-flow-best-practices', icon: { sourceName: 'Mail', sourcePath: 'Microsoft/dark-blue-Mail.svg', match: 'closest' } },
      { slug: 'migration', name: 'Mailbox migration', short: 'Migration', learn: 'https://learn.microsoft.com/en-us/exchange/mailbox-migration/mailbox-migration', icon: { sourceName: 'Azure Migrate', sourcePath: 'migrate/10281-icon-service-Azure-Migrate.svg', match: 'closest' } },
      { slug: 'hybrid', name: 'Exchange hybrid deployments', short: 'Hybrid', learn: 'https://learn.microsoft.com/en-us/exchange/exchange-hybrid', icon: { sourceName: 'Exchange On-Premises Access', sourcePath: 'other/10334-icon-service-Exchange-On-Premises-Access.svg', match: 'closest' } },
      { slug: 'exchange-online-protection', name: 'Exchange Online Protection', short: 'EOP', learn: 'https://learn.microsoft.com/en-us/exchange/standalone-eop/standalone-eop', icon: { sourceName: 'Shield Error', sourcePath: 'Microsoft/dark-blue-Shield Error.svg', match: 'closest' } },
      { slug: 'security-compliance', name: 'Security, compliance and permissions', short: 'Security and compliance', learn: 'https://learn.microsoft.com/en-us/exchange/security-and-compliance/security-and-compliance', icon: { sourceName: 'Lock Shield', sourcePath: 'Microsoft/dark-blue-Lock Shield.svg', match: 'closest' } },
      { slug: 'recipients', name: 'Recipients and address books', short: 'Recipients', learn: 'https://learn.microsoft.com/en-us/exchange/recipients-in-exchange-online/recipients-in-exchange-online', icon: { sourceName: 'Book Contacts', sourcePath: 'Microsoft/dark-blue-Book Contacts.svg', match: 'closest' } },
      { slug: 'clients-mobile', name: 'Clients and mobile', short: 'Clients and mobile', learn: 'https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/clients-and-mobile-in-exchange-online', icon: { sourceName: 'Phone Laptop', sourcePath: 'Microsoft/dark-blue-Phone Laptop.svg', match: 'closest' } },
      { slug: 'collaboration', name: 'Collaboration and sharing', short: 'Collaboration', learn: 'https://learn.microsoft.com/en-us/exchange/collaboration-exo/collaboration-exo', icon: { sourceName: 'People Team', sourcePath: 'Microsoft/dark-blue-People Team.svg', match: 'closest' } },
      { slug: 'monitoring', name: 'Monitoring and reports', short: 'Monitoring', learn: 'https://learn.microsoft.com/en-us/exchange/monitoring/monitoring', icon: { sourceName: 'Monitor', sourcePath: 'management-governance/00001-icon-service-Monitor.svg', match: 'closest' } }
    ],
    defaultProduct: 'exchange-online',

    topics: [
      { slug: 'policies', name: 'Policies and rules', icon: { sourceName: 'Policy', sourcePath: 'management-governance/10316-icon-service-Policy.svg', match: 'closest' } },
      { slug: 'email-authentication', name: 'Email authentication and transport security', icon: { sourceName: 'Certificate', sourcePath: 'Microsoft/dark-blue-Certificate.svg', match: 'closest' } },
      { slug: 'permissions', name: 'Roles and permissions', icon: { sourceName: 'Person Settings', sourcePath: 'Microsoft/dark-blue-Person Settings.svg', match: 'closest' } },
      { slug: 'reporting', name: 'Reports and message tracing', icon: { sourceName: 'Dashboard', sourcePath: 'general/10015-icon-service-Dashboard.svg', match: 'closest' } },
      { slug: 'architecture', name: 'Planning and deployment', icon: { sourceName: 'Blueprints', sourcePath: 'management-governance/00006-icon-service-Blueprints.svg', match: 'closest' } },
      { slug: 'troubleshooting', name: 'Troubleshooting', icon: { sourceName: 'Troubleshoot', sourcePath: 'general/10341-icon-service-Troubleshoot.svg', match: 'exact' } },
      { slug: 'developer', name: 'PowerShell and APIs', icon: { sourceName: 'Powershell', sourcePath: 'general/10825-icon-service-Powershell.svg', match: 'closest' } },
      { slug: 'fundamentals', name: 'Fundamentals', icon: { sourceName: 'Guide', sourcePath: 'general/10810-icon-service-Guide.svg', match: 'closest' } },
      { slug: 'general', name: 'General', icon: { sourceName: 'Information', sourcePath: 'general/10005-icon-service-Information.svg', match: 'closest' } }
    ],
    defaultTopic: 'general',

    iconSource: { repository: ICONS, revision: '3d57443ed4445be9465ee2fee6a6ce6fd02cf90c' },

    stopwords: 'microsoft exchange online documentation docs update updated updates change changes new for with from into about that this your their has have will are and the how use using overview configure configuration guide learn support service services preview mail email',

    searchAliases: {
      exo: 'exchange online',
      eop: 'exchange online protection',
      eac: 'exchange admin center',
      hcw: 'hybrid configuration wizard',
      gal: 'global address list',
      oab: 'offline address book',
      mrm: 'messaging records management',
      dkim: 'domainkeys identified mail',
      dmarc: 'domain-based message authentication',
      spf: 'sender policy framework'
    }
  },

  // First match wins, over "<path> <title> <body>" lowercased, so a pattern
  // anchored with `^exchange\/` reads the path. Products come from the folder.
  classify: {
    products: [
      { slug: 'exchange-online-protection', match: /^exchange\/exchangehybrid\/standalone-eop\// },
      { slug: 'hybrid', match: /^exchange\/exchangehybrid\// },
      { slug: 'mail-flow', match: /^exchange\/exchangeonline\/(mail-flow-best-practices\/|reference\/sender-rewriting-scheme)/ },
      { slug: 'migration', match: /^exchange\/exchangeonline\/(mailbox-migration\/|get-new-mailbox-migration)/ },
      { slug: 'security-compliance', match: /^exchange\/exchangeonline\/(security-and-compliance|permissions-exo)\// },
      { slug: 'recipients', match: /^exchange\/exchangeonline\/(recipients-in-exchange-online|address-books)\// },
      { slug: 'clients-mobile', match: /^exchange\/exchangeonline\/(clients-and-mobile-in-exchange-online|accessibility)\// },
      { slug: 'collaboration', match: /^exchange\/exchangeonline\/(collaboration-exo|sharing)\// },
      { slug: 'monitoring', match: /^exchange\/exchangeonline\/monitoring\// }
    ],
    topics: [
      { slug: 'troubleshooting', scope: 'title', match: /\b(troubleshoot|known issue|error|fix|faq|frequently asked)\w*/ },
      { slug: 'developer', scope: 'title', match: /\b(api|powershell|graph|cmdlet|rest|ews|smtp auth)\b/ },
      { slug: 'email-authentication', scope: 'title', match: /\b(spf|dkim|dmarc|arc|tls|certificate|encrypt|smtp|authentication)\w*/ },
      { slug: 'permissions', scope: 'title', match: /\b(permission|role|rbac|delegat|admin units?)\w*/ },
      { slug: 'reporting', scope: 'title', match: /\b(report|message trace|trace|alert|monitor|audit|insight)\w*/ },
      { slug: 'architecture', scope: 'title', match: /\b(deploy|migrat|plan|prerequisit|set up|setup|get started|onboard|decommission|cutover|staged|batch)\w*/ },
      { slug: 'policies', scope: 'title', match: /\b(polic|rule|connector|retention|quarantine)\w*/ },
      { slug: 'fundamentals', scope: 'title', match: /\b(overview|what is|learn about|introduction|about|concepts?)\b/ }
    ]
  },

  copy: {
    rssFeedLabel: 'Subscribe to the Daily Exchange News RSS feed',
    messageCenterHeading: 'Exchange Online in Message Center',
    landing: {
      heading: 'Today in Exchange Online',
      blurb: 'Every tracked change across Exchange Online documentation, in plain English.'
    },
    directory: {
      productsLede: 'Every area of Exchange Online tracked here, from mail flow to hybrid, with what changed in each.',
      topicsLede: 'Cross-area themes, from policies and email authentication to deployment.'
    },
    search: {
      inputLabel: 'Search Exchange changes',
      placeholder: 'Search Exchange Online documentation changes'
    },
    compare: {
      pageTitle: 'Compare Exchange documentation revisions',
      lede: 'Paste a Microsoft Learn URL to see exactly what changed between two revisions.',
      placeholderUrl: 'https://learn.microsoft.com/en-us/exchange/mail-flow-best-practices/mail-flow-best-practices',
      mapping: 'Exchange Online pages map to merill/exchange-docs-mirror, rebuilt from Microsoft Learn.'
    },
    dailyEmail: {
      eyebrow: 'Daily Exchange News',
      intro: 'A short daily summary of what changed across Exchange Online documentation.'
    },
    detail: {
      adminHeading: 'What Exchange admins need to know',
      adminImpactLabel: 'For Exchange administrators',
      summaryLabel: 'Change summary',
      summaryDisclosure: 'Summaries are generated from the documentation change itself.'
    },
    footer: {
      featureBlurb: 'Maester Cloud continuously tests your Microsoft 365 and Exchange Online security configuration.',
      tagline: 'Daily.Exchange.Admin.News: an independent record of Exchange Online documentation changes.'
    },
    about: {
      heading: 'About Daily.Exchange.Admin.News',
      lede: 'A readable daily record of what Microsoft changed across the Exchange Online documentation set.',
      whyItExists: [
        'Exchange Online covers mail flow, migration, hybrid, protection and the clients people read mail in, and its documentation changes constantly. Most changes are never announced anywhere.',
        'Exchange Online\'s documentation source is not public, so there is no commit history to read. This site rebuilds one from Microsoft Learn and writes down what changed.'
      ],
      howItWorks: [
        'Four times a day merill/exchange-docs-mirror fetches every Exchange Online and Exchange hybrid page on Microsoft Learn and commits the ones that changed.',
        'Every six hours this site reads that history. Each change is summarised, classified by area and theme, and published with a link to the exact revision that produced it.',
        'Nothing here is official. It is a reading of the public documentation.'
      ],
      emailEyebrow: 'Daily Exchange News',
      emailBody: 'A short daily summary of what changed across Exchange Online documentation.',
      extraSections: [],
      community: [
        'Built by Merill Fernando as part of the Admin.News network.'
      ],
      quote: 'The documentation changes every day. Somebody should be reading it.',
      bio: 'Merill Fernando builds tools for Microsoft identity, security and messaging administrators.'
    }
  }
};
