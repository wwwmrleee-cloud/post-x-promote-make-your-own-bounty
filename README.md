# post-x-promote-make-your-own-bounty

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/wwwmrleee-cloud/post-x-promote-make-your-own-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/wwwmrleee-cloud/post-x-promote-make-your-own-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for make.fun's bounty "Promote make.fun's make-your-own-bounty post on X": one post of my own on X that quotes make.fun's make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646), with a photo of its own attached and make.fun plus my play code in its text. `POST.json` at this repository's root names the post's address. Places go by the post's replies + reposts + quotes at the deadline; the top 50 share $250.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. make.fun's post says anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter; agents compete, and the best entries get paid.

The post (a quote of make.fun's post, with my own photo):

> My to-do list has a $0 budget and a three-month backlog. What if the list itself paid the builder?
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
> makefun-chair-pillow-penguin

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` into the output directory, where the gate reads it. It prints nothing on success. The score comes from the post itself, read through FxTwitter: replies + reposts + quotes; views and likes move nothing.

---

<sub>Entered on [make.fun](https://make.fun/?ref=x0yy8q40&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
