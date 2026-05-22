# bassuurmond.nl — Suurmond Technical Solutions

Eenvoudige, professionele eenpaginasite voor Bas Suurmond als ZZP-er
(technische dienstverlening & advies).

- **Stack:** Next.js 16 · React 19 · TypeScript · Tailwind 4
- **Container poort:** `3007`
- **Productie URL:** https://bassuurmond.nl

## Lokaal draaien

```bash
npm install
npm run dev          # http://localhost:3007
```

## Productie (Docker)

```bash
docker compose build
docker compose up -d
```

De container bindt op `0.0.0.0:3007` zodat HAProxy op opnsense erbij kan.

## HAProxy / opnsense — nieuwe routering toevoegen

Op `192.168.1.232` draait deze app op poort **3007** (vrije poort naast
3000 dizzipline, 3003 aycabtu, 3004 beontimer, 3005/3006 umami, 8080 CCB).

### Stap 1 — DNS

Zet een A-record voor `bassuurmond.nl` (en eventueel `www.bassuurmond.nl`)
naar het publieke IP van je opnsense.

### Stap 2 — Certificaat (Let's Encrypt via opnsense ACME plugin)

Maak een nieuw certificaat aan voor `bassuurmond.nl` met dezelfde methode
als CampCraftBuilders (HTTP-01 challenge via `acme_challenge_backend`).
Voeg het cert toe aan de bestaande SNI cert-list van `1_HTTPS_frontend`.

### Stap 3 — HAProxy backend toevoegen

In _Services → HAProxy → Configuration → Backend Pools_:

```haproxy
backend Bassuurmond_backend
    mode http
    balance source
    stick-table type ipv4 size 50k expire 30m
    stick on src
    http-request set-header X-Forwarded-Proto https
    http-request set-header X-Forwarded-Host %[req.hdr(Host)]
    http-request set-header X-Forwarded-For %[src]
    http-request add-header X-Real-IP %[src]
    http-reuse safe
    server Bassuurmond 192.168.1.232:3007
```

### Stap 4 — ACL + routing rule op `1_HTTPS_frontend`

In _Conditions_:

```
acl_bassuurmond_traffic   hdr_sub(host) -i bassuurmond.nl
```

In _Rules_ (boven of onder de bestaande PUBLIC_SUBDOMAINS rules):

```
use_backend Bassuurmond_backend if acl_bassuurmond_traffic
```

> Optioneel: redirect `www.bassuurmond.nl` → `bassuurmond.nl` met dezelfde
> aanpak als de www-aycabtu redirect die je al hebt.

### Stap 5 — Apply

_Apply Changes_ in opnsense HAProxy en verifieer met
`curl -I https://bassuurmond.nl`.

## Logo

Het echte logo (PNG/SVG) verwacht ik in `public/images/`. Tijdelijk wordt
een inline SVG gerenderd via `src/components/Logo.tsx`. Vervang die door
het officiële bestand zodra het beschikbaar is — of laat de SVG staan,
het is een nette schaalbare benadering.

## Structuur

```
src/
├── app/
│   ├── globals.css        # Tailwind + brand kleuren
│   ├── layout.tsx         # metadata, JSON-LD LocalBusiness
│   ├── page.tsx           # Home (single-page)
│   ├── not-found.tsx
│   ├── robots.ts
│   └── sitemap.ts
└── components/
    ├── Logo.tsx           # SVG chevron + wordmark
    ├── Navigation.tsx
    ├── Hero.tsx
    ├── Services.tsx
    ├── Advies.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## Contact (op de site)

- Telefoon: 06 - 53 79 05 01
- E-mail: sts@bassuurmond.nl
- KvK: 98019791 · BTW: NL005304618B68
