// Daily Exchange News against the engine's shared product checks, plus what is
// particular to Exchange: two docsets publishing under one Learn path.
const path = require('node:path');
const { defineProductConformance } = require('@merill/dailynews-engine/product-conformance');

defineProductConformance({
  root: path.join(__dirname, '..'),
  // Names this product must not carry, from files copied out of its siblings.
  // SharePoint, Teams and Purview are left out: Exchange's docs name them.
  foreignNames: /\b(intune|entra|defender|memdocs|autopilot|windows server)\b/i,
  mirrorState: 'exchange-docs/.learn-mirror/state.json',
  trackedSamples: ['Exchange/ExchangeOnline/mail-flow-best-practices/mail-flow-best-practices.md', 'Exchange/ExchangeHybrid/hybrid-deployment/deploy-hybrid.md'],
  routeCases: {
    'Exchange/ExchangeOnline/mail-flow-best-practices/mail-flow-best-practices.md': 'exchange/mail-flow-best-practices/mail-flow-best-practices',
    'Exchange/ExchangeHybrid/exchange-hybrid.md': 'exchange/exchange-hybrid'
  },
  productCases: {
    'exchange/exchangeonline/mail-flow-best-practices/use-connectors-to-configure-mail-flow/set-up-connectors-to-route-mail.md': 'mail-flow',
    'exchange/exchangeonline/mailbox-migration/mailbox-migration.md': 'migration',
    'exchange/exchangeonline/get-new-mailbox-migration.md': 'migration',
    'exchange/exchangehybrid/hybrid-deployment/deploy-hybrid.md': 'hybrid',
    'exchange/exchangehybrid/standalone-eop/standalone-eop.md': 'exchange-online-protection',
    'exchange/exchangeonline/security-and-compliance/security-and-compliance.md': 'security-compliance',
    'exchange/exchangeonline/recipients-in-exchange-online/manage-user-mailboxes/manage-user-mailboxes.md': 'recipients',
    'exchange/exchangeonline/clients-and-mobile-in-exchange-online/outlook-on-the-web/outlook-on-the-web.md': 'clients-mobile',
    'exchange/exchangeonline/collaboration-exo/shared-mailboxes.md': 'collaboration',
    'exchange/exchangeonline/monitoring/monitoring.md': 'monitoring',
    'exchange/exchangeonline/whats-new.md': 'exchange-online'
  }
});
