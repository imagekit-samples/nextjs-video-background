 This is a [Next.js](https://nextjs.org) project that compares a local background video against an optimized ImageKit implementation.

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create `.env.local` in the project root:

```bash
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
```

### 3) Run the project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` - Local `<video>` baseline (with `poster` + `preload="none"`).
- `/imagekit` - `Video` component version with ImageKit optimizations.

## What the ImageKit page does

- Uses `ImageKitProvider` in `app/layout.tsx`.
- Uses `Video` from `@imagekit/next` in `app/imagekit/page.tsx`.
- Applies transformations:
  - `width: 1280`
  - `raw: "ac-none"`
- Uses auto-thumbnail poster:
  - ``${urlEndpoint}/bg-video.mp4/ik-thumbnail.jpg?tr=so-3``
- Respects reduced-motion preference by rendering the poster image instead of autoplaying video.

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT` | Yes | Your ImageKit URL endpoint (for example `https://ik.imagekit.io/your_imagekit_id`) |
