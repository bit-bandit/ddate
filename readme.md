# ddate - Discordian calendar for TypeScript

Take your dates and make them actually good. It's like that one thing from the
[`util-linux`](https://en.wikipedia.org/wiki/Discordian_calendar#Implementations)
base that got removed, but as a module.

## Usage

```
> import ddate from "./mod.ts"
> ddate();
"Setting Orange, 66 of Bureaucracy, YOLD 3188"
> ddate({ short: true });
"SO, 66 of Bcy, YOLD 3188"
> ddate({ date: "0"});
"Sweetmorn, 1 of Chaos, YOLD 3166"
> ddate({ date: "0", short: true});
"SM, 1 of Chs, YOLD 3166"
```

## Bugs

Probably.

## Copying

Check LICENSE, bub.
