# BORG Token metrics

A NextJs site, which showcases BORG token Metrics.

![image](https://github.com/numeroflip/borg-showcase/assets/46031874/f811950b-a39b-4587-99e3-137d2bc3d614)


Live deployment: https://borg-showcase.vercel.app/

API Used: `https://borg-api-techchallenge.swissborg-stage.com/api`

Charting library used: `recharts`

## Improvements

It's not perfect. Error handling, data validation, and the responsive views could definitely use some more love.

The page scores could be improved by lazy hydrating the pie chart, and ssr loading the charts in general.
This is currently blocked by the library in use. See issue: https://github.com/recharts/recharts/issues/3658

So it could be solved by working with a different, or lower level library, where we have more control over the styling, and the responsiveness.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
