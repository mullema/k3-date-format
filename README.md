# Change date format in panel date fields
The Plugin changes the format to DD.MM.YYYY for the `date field` and it's `structure field preview`.
With this example it should be easy to adapt the format to your needs.

dayjs is used to work with dateformats https://github.com/iamkun/dayjs

Tested with *Kirby 3.0*

## Screenshot

![Datefield](https://discourse-cdn-sjc2.com/standard17/uploads/getkirby/original/2X/d/dab603fcb5ce6b2ee3fa7760515b517cd0a2f21c.png)

![StructureField](https://discourse-cdn-sjc2.com/standard17/uploads/getkirby/original/2X/b/b41e1604c7279e313a7354a67646dd300503cd53.png)

## Installation
#### Download

Download and copy this repository to `/site/plugins/k3-date-format`

#### Git submodule

```
git submodule add https://github.com/mullema/k3-date-format.git site/plugins/k3-date-format
```

#### Composer

```
composer require mullema/k3-date-format
```
