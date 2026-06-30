You are the lead software engineer for a new open-source project called FamDeck.

# PRODUCT

FamDeck is an elegant, configuration-driven Family Operating System.

It is NOT simply a dashboard.

It should become the central digital home for a family.

Initially it will mostly aggregate links to external resources (Google Drive, OneDrive, Google Calendar, Photos, Banking, School portals, etc.).

Later it should evolve into a complete platform with widgets, plugins, optional cloud synchronization and AI assistance.

The project must therefore be architected for long-term growth.

------------------------------------------------------------

# PHILOSOPHY

Configuration First.

Every family should be able to fork the repository and customize it without changing React code.

Nothing about one specific family should ever be hardcoded.

Everything should be generated from configuration.

------------------------------------------------------------

# TARGET USERS

Initially:

• Individuals
• Couples
• Families

Future:

• Shared apartments
• Clubs
• Communities
• Small businesses

Therefore avoid using assumptions specific to families.

------------------------------------------------------------

# TECHNOLOGY

Use

React

TypeScript

Vite

TailwindCSS

React Router

Lucide Icons

vite-plugin-pwa

Strict TypeScript

ESLint

Prettier

Functional Components only

------------------------------------------------------------

# ARCHITECTURE

Design using these layers.

Presentation

↓

Widgets

↓

Providers

↓

Configuration

The UI must never directly know where data comes from.

------------------------------------------------------------

# CONFIGURATION

Create

src/config/

family.json

navigation.json

dashboard.json

widgets.json

providers.json

links.json

theme.json

settings.json

Every configurable aspect of the application should eventually come from these files.

------------------------------------------------------------

# MODULES

Create placeholder pages for

Dashboard

Family

Calendar

Documents

Finance

Health

Travel

Photos

Knowledge

Tasks

Emergency

Settings

Do not implement business logic.

Only create architecture.

------------------------------------------------------------

# LAYOUT

Create

AppLayout

Sidebar

Header

Footer

Breadcrumb

Search

Theme Toggle

Responsive navigation

Collapsible sidebar

Modern card layout

------------------------------------------------------------

# DESIGN

The visual design should feel inspired by

Apple

Notion

Linear

Raycast

Use

Large spacing

Rounded corners

Soft shadows

Subtle animations

Glassmorphism only where appropriate

Excellent typography

Responsive grid

Dark mode

Light mode

------------------------------------------------------------

# ROUTING

Use React Router.

Each page should lazy load.

The sidebar should be generated dynamically from navigation.json.

------------------------------------------------------------

# COMPONENTS

Components should be

Reusable

Small

Composable

Single responsibility

Prefer under 200 lines.

------------------------------------------------------------

# CODE QUALITY

No duplicated layouts.

No duplicated cards.

No duplicated navigation.

No magic numbers.

No inline styles.

Tailwind only.

Use composition over inheritance.

------------------------------------------------------------

# FUTURE

The architecture should support adding

Google Calendar

Google Drive

OneDrive

Dropbox

Nextcloud

Supabase

Weather

Notifications

Plugins

Widgets

AI Assistant

without changing the page structure.

------------------------------------------------------------

# CURRENT TASK

ONLY implement the application foundation.

Do NOT build features.

Create a production-quality project structure.

Configure all tooling.

Create all folders.

Create all routing.

Create placeholder pages.

Create layout.

Create theme support.

Create navigation.

Ensure

npm install

npm run dev

npm run build

work successfully.

Do not continue beyond the foundation.

Stop after completing the project shell.
