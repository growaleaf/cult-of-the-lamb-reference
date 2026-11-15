// Cult of the Lamb Building & Decoration Cost Reference — data
// Generated from sourced, hand-verified entries. See README.md for source list and caveats.

const SOURCES = {
  "wikigg": {
    "name": "cultofthelamb.wiki.gg \"Buildings\" page (redirected from Buildings and Decorations)",
    "url": "https://cultofthelamb.wiki.gg/wiki/Buildings_and_Decorations",
    "archive": "https://web.archive.org/web/2025/https://cultofthelamb.wiki.gg/wiki/Buildings_and_Decorations",
    "note": "Page footer states it was last edited 29 January 2024, and that pages created before February 2024 originate from the Fandom Cult of the Lamb Wiki, now hosted on wiki.gg under CC BY-SA 4.0. Covers base game plus Cultist Pack, Heretic Pack, Sinful Pack, Twitch, Merch, and area DLCs (Darkwood, Anura, Anchordeep, Silk Cradle)."
  },
  "techraptor_decor": {
    "name": "TechRaptor, \"Cult of the Lamb Decorations Guide\"",
    "url": "https://techraptor.net/gaming/guides/cult-of-lamb-decorations-guide",
    "archive": "https://web.archive.org/web/2025/https://techraptor.net/gaming/guides/cult-of-lamb-decorations-guide",
    "note": "Published August 12, 2022 (launch week). Live site returns HTTP 403; read via archive.org. Lists Crafting Cost and Unlocked By per decoration."
  },
  "techraptor_build": {
    "name": "TechRaptor, \"Cult of the Lamb Divine Inspiration and Building Guide\"",
    "url": "https://techraptor.net/gaming/guides/cult-of-lamb-divine-inspiration-and-building-guide",
    "archive": "https://web.archive.org/web/2025/https://techraptor.net/gaming/guides/cult-of-lamb-divine-inspiration-and-building-guide",
    "note": "Published August 12, 2022 (launch week). Live site returns HTTP 403; read via archive.org. Organizes buildings by Divine Inspiration tier 1-5."
  }
};

const ITEMS = [
  {
    "name": "Sleeping Bag",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 5
      },
      {
        "resource": "Coins",
        "qty": 10
      }
    ],
    "desc": "A place for a Follower to sleep. Very unstable, will often collapse.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": "TechRaptor (launch, Aug 2022) gave 4 Wood, 8 Coin for the same building; wiki.gg (edited Jan 2024) gives 5 Lumber, 10 Coins. Shown as a version difference, not a same-era conflict \u2014 Lumber/Wood appear to be the same resource under different-era naming."
  },
  {
    "name": "Shelter",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 5
      },
      {
        "resource": "Stone",
        "qty": 3
      },
      {
        "resource": "Coins",
        "qty": 10
      }
    ],
    "desc": "Upgrade a Sleeping Bag to a more stable shelter, which will collapse less often.",
    "unlock": "Upgrade of Sleeping Bag",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Grand Shelter",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Wooden Planks",
        "qty": 2
      },
      {
        "resource": "Gold Bars",
        "qty": 2
      },
      {
        "resource": "Fertilizer",
        "qty": 3
      }
    ],
    "desc": "Upgrade a Shelter. Collects Devotion while they sleep. Never collapses.",
    "unlock": "Upgrade of Shelter",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Shared Shelter",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Stone Blocks",
        "qty": 8
      },
      {
        "resource": "Gold Bars",
        "qty": 8
      },
      {
        "resource": "Fertilizer",
        "qty": 8
      }
    ],
    "desc": "A place for multiple followers to sleep. Never collapses.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Cooking Fire",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 5
      },
      {
        "resource": "Stone",
        "qty": 2
      }
    ],
    "desc": "Cook raw items and turn them into Meals that Followers can eat. Can only be built once.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Kitchen",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Wooden Planks",
        "qty": 4
      },
      {
        "resource": "Stone Blocks",
        "qty": 8
      },
      {
        "resource": "Gold Bars",
        "qty": 8
      }
    ],
    "desc": "Allows Followers to cook meals for their fellow cult members.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Body Pit",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Coins",
        "qty": 10
      },
      {
        "resource": "Lumber",
        "qty": 5
      }
    ],
    "desc": "Bury dead Followers in a simple pit. Avoids rotting corpses.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Grave",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Coins",
        "qty": 20
      },
      {
        "resource": "Stone Blocks",
        "qty": 3
      }
    ],
    "desc": "Upgraded Body Pit. Mutually exclusive with Natural Burial.",
    "unlock": "Upgrade of Body Pit",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Outhouse",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Coins",
        "qty": 20
      },
      {
        "resource": "Wooden Planks",
        "qty": 5
      }
    ],
    "desc": "Give your Followers somewhere to relieve themselves.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Outhouse II",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Crystal Shards",
        "qty": 10
      },
      {
        "resource": "Wooden Planks",
        "qty": 7
      },
      {
        "resource": "Coins",
        "qty": 20
      }
    ],
    "desc": "Upgraded version of Outhouse. Has higher capacity.",
    "unlock": "Upgrade of Outhouse",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Janitor Station",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Gold Bars",
        "qty": 6
      },
      {
        "resource": "Wooden Planks",
        "qty": 5
      }
    ],
    "desc": "Followers will automatically clean vomit and poop.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Janitor Station II",
    "category": "Follower - General",
    "cost": "not published",
    "desc": "A building that allows Followers to clean up their own mess. Followers will also clean outhouses.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Prison",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 25
      },
      {
        "resource": "Coins",
        "qty": 20
      }
    ],
    "desc": "Holds naughty Followers. Effective at dealing with dissenters, stopping their preaching and makes re-education actions more effective.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Propaganda Speakers",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Coins",
        "qty": 10
      },
      {
        "resource": "Stone",
        "qty": 2
      },
      {
        "resource": "Lumber",
        "qty": 5
      }
    ],
    "desc": "Ensure your Followers hear your message. When within range of speakers, Followers will work and pray 20% faster. Requires Gold Bars as fuel regularly.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Demonic Summoning Circle",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Coins",
        "qty": 20
      },
      {
        "resource": "Stone",
        "qty": 10
      },
      {
        "resource": "Lumber",
        "qty": 5
      }
    ],
    "desc": "Possess a Follower with the spirit of a Demon so that they can join you on your next Crusade. Can only be built once.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Demonic Summoning Circle II",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Gold Bars",
        "qty": 4
      },
      {
        "resource": "Stone Blocks",
        "qty": 3
      },
      {
        "resource": "Wooden Planks",
        "qty": 1
      }
    ],
    "desc": "Upgraded Demonic Summoning Circle. Summon 2 Demons at a time. Can only be built once.",
    "unlock": "Upgrade of Demonic Summoning Circle",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Demonic Summoning Circle III",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Spider Silk",
        "qty": 15
      },
      {
        "resource": "Gold Bars",
        "qty": 6
      },
      {
        "resource": "Stone Blocks",
        "qty": 5
      }
    ],
    "desc": "Upgraded Demonic Summoning Circle II. Summon 3 Demons at a time. Can only be built once.",
    "unlock": "Upgrade of Demonic Summoning Circle II",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Healing Bay",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Coins",
        "qty": 20
      },
      {
        "resource": "Camellia",
        "qty": 10
      },
      {
        "resource": "Wooden Planks",
        "qty": 5
      }
    ],
    "desc": "Sick Followers can be assigned here to be quickly healed for 15 Camellia. Can only be built once.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Healing Bay II",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Gold Bars",
        "qty": 10
      },
      {
        "resource": "Camellia",
        "qty": 10
      },
      {
        "resource": "Wooden Planks",
        "qty": 5
      }
    ],
    "desc": "Upgraded version of Healing Bay. Lower the treatment costs to 10 Camellia. Can only be built once.",
    "unlock": "Upgrade of Healing Bay",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Morgue",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Coins",
        "qty": 24
      },
      {
        "resource": "Stone",
        "qty": 24
      }
    ],
    "desc": "Followers can collect and store bodies while you are away here, but it must be emptied before it is full or it will cause illness. Can only be built once.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Morgue II",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Stone Blocks",
        "qty": 8
      },
      {
        "resource": "Gold Bars",
        "qty": 6
      }
    ],
    "desc": "Upgraded version of Morgue. Higher capacity. Can only be built once.",
    "unlock": "Upgrade of Morgue",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Crypt",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Coins",
        "qty": 24
      },
      {
        "resource": "Stone",
        "qty": 16
      }
    ],
    "desc": "Lay multiple dead Followers to rest. Avoids rotting corpses.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Crypt II",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Stone Blocks",
        "qty": 5
      },
      {
        "resource": "Gold Bars",
        "qty": 4
      }
    ],
    "desc": "Upgraded version of Crypt. Holds more dead.",
    "unlock": "Upgrade of Crypt",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Crypt III",
    "category": "Follower - General",
    "cost": [
      {
        "resource": "Stone Blocks",
        "qty": 13
      },
      {
        "resource": "Gold Bars",
        "qty": 14
      }
    ],
    "desc": "Upgraded version of Crypt II. Holds even more dead.",
    "unlock": "Upgrade of Crypt II",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Tailor",
    "category": "Follower - General",
    "cost": "not published",
    "desc": "Creates outfits for Followers to keep them stylish.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Leader Tent",
    "category": "Follower - General",
    "cost": "not published",
    "desc": "A resting place worthy of a glorious Leader, and their Crown.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Farm Plot",
    "category": "Follower - Food",
    "cost": [
      {
        "resource": "Grass",
        "qty": 5
      },
      {
        "resource": "Coins",
        "qty": 2
      }
    ],
    "desc": "The basics of all farming. Requires seeds.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Farmer Station",
    "category": "Follower - Food",
    "cost": [
      {
        "resource": "Coins",
        "qty": 20
      },
      {
        "resource": "Lumber",
        "qty": 20
      }
    ],
    "desc": "Allows Followers to water nearby crops.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Farmer Station II",
    "category": "Follower - Food",
    "cost": [
      {
        "resource": "Wooden Planks",
        "qty": 10
      },
      {
        "resource": "Stone Blocks",
        "qty": 5
      }
    ],
    "desc": "Upgraded version of Farmer Station. Farmers will be able to harvest your crops and deposit them in a chest for you to collect.",
    "unlock": "Upgrade of Farmer Station",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Scarecrow",
    "category": "Follower - Food",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 25
      },
      {
        "resource": "Coins",
        "qty": 30
      }
    ],
    "desc": "Prevents birds from stealing the seeds from Farm Plots within range.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Trap Scarecrow",
    "category": "Follower - Food",
    "cost": [
      {
        "resource": "Gold Bars",
        "qty": 10
      },
      {
        "resource": "Stone Blocks",
        "qty": 5
      },
      {
        "resource": "Wooden Planks",
        "qty": 10
      }
    ],
    "desc": "Upgraded version of Scarecrow. Catches birds that try to steal the seeds from Farm Plots within range.",
    "unlock": "Upgrade of Scarecrow",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Compost Bin",
    "category": "Follower - Food",
    "cost": [
      {
        "resource": "Spider Silk",
        "qty": 10
      },
      {
        "resource": "Gold Bars",
        "qty": 10
      },
      {
        "resource": "Wooden Planks",
        "qty": 5
      }
    ],
    "desc": "Deposit Grass to turn it into Fertilizer.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Natural Burial",
    "category": "Follower - Food",
    "cost": [
      {
        "resource": "Gold Bars",
        "qty": 6
      },
      {
        "resource": "Wooden Planks",
        "qty": 10
      }
    ],
    "desc": "Deposit dead bodies to turn them into Fertilizer. Mutually exclusive with the Grave.",
    "unlock": "Requires the \"Return to the Earth\" Doctrine (per TechRaptor's launch-week building guide)",
    "sources": [
      "wikigg",
      "techraptor_build"
    ],
    "conflict": null
  },
  {
    "name": "Harvest Totem",
    "category": "Follower - Food",
    "cost": [
      {
        "resource": "Wooden Planks",
        "qty": 5
      },
      {
        "resource": "Stone Blocks",
        "qty": 2
      },
      {
        "resource": "Coins",
        "qty": 20
      }
    ],
    "desc": "Increase growth speed of all Farm Plots within range.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Devotion Harvest Totem",
    "category": "Follower - Food",
    "cost": [
      {
        "resource": "Gold Bars",
        "qty": 10
      },
      {
        "resource": "Stone Blocks",
        "qty": 5
      },
      {
        "resource": "Wooden Planks",
        "qty": 5
      }
    ],
    "desc": "Upgraded version of Harvest Totem. Slowly generates Devotion.",
    "unlock": "Upgrade of Harvest Totem",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Seed Silo",
    "category": "Follower - Food",
    "cost": [
      {
        "resource": "Coins",
        "qty": 20
      },
      {
        "resource": "Stone",
        "qty": 10
      },
      {
        "resource": "Lumber",
        "qty": 10
      }
    ],
    "desc": "Put seeds here for your Followers to sow.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Fertiliser Silo",
    "category": "Follower - Food",
    "cost": [
      {
        "resource": "Coins",
        "qty": 20
      },
      {
        "resource": "Wooden Planks",
        "qty": 5
      }
    ],
    "desc": "Put fertilizer here for your Followers to use on Farm Plots.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Lumberyard",
    "category": "Follower - Economy",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 15
      },
      {
        "resource": "Coins",
        "qty": 30
      }
    ],
    "desc": "A Follower will generate Lumber. Collapses after a certain amount gathered.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Lumberyard II",
    "category": "Follower - Economy",
    "cost": [
      {
        "resource": "Wooden Planks",
        "qty": 3
      },
      {
        "resource": "Gold Bars",
        "qty": 2
      },
      {
        "resource": "Crystal Shards",
        "qty": 5
      }
    ],
    "desc": "Upgraded version of Lumberyard. Can generate more Lumber before collapsing.",
    "unlock": "Upgrade of Lumberyard",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Stone Mine",
    "category": "Follower - Economy",
    "cost": [
      {
        "resource": "Coins",
        "qty": 30
      },
      {
        "resource": "Stone",
        "qty": 10
      }
    ],
    "desc": "A Follower will generate Stone. Collapses after a certain amount gathered.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Stone Mine II",
    "category": "Follower - Economy",
    "cost": [
      {
        "resource": "Spider Silk",
        "qty": 10
      },
      {
        "resource": "Gold Bars",
        "qty": 2
      },
      {
        "resource": "Stone Blocks",
        "qty": 2
      }
    ],
    "desc": "Upgraded version of Stone Mine. Can generate more Stone before collapsing.",
    "unlock": "Upgrade of Stone Mine",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Refinery",
    "category": "Follower - Economy",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 5
      },
      {
        "resource": "Stone",
        "qty": 10
      },
      {
        "resource": "Coins",
        "qty": 20
      }
    ],
    "desc": "Converts basic resources into advanced ones.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Refinery II",
    "category": "Follower - Economy",
    "cost": [
      {
        "resource": "Gold Bars",
        "qty": 6
      },
      {
        "resource": "Stone Blocks",
        "qty": 5
      },
      {
        "resource": "Wooden Planks",
        "qty": 3
      }
    ],
    "desc": "Upgraded version of Refinery. Can queue more and refine items faster.",
    "unlock": "Upgrade of Refinery",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Shrine",
    "category": "Faith - General",
    "cost": [
      {
        "resource": "Coins",
        "qty": 30
      }
    ],
    "desc": "A place for your Followers to pray. The shrine will hold the Devotion they create. Can only be built once.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Temple",
    "category": "Faith - General",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 15
      },
      {
        "resource": "Stone",
        "qty": 5
      }
    ],
    "desc": "Used to perform Rituals, to deliver Sermons, to upgrade the Red Crown, and to proclaim Doctrines. Can only be built once.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Confession Booth",
    "category": "Faith - General",
    "cost": [
      {
        "resource": "Coins",
        "qty": 10
      },
      {
        "resource": "Stone Blocks",
        "qty": 3
      },
      {
        "resource": "Wooden Planks",
        "qty": 5
      }
    ],
    "desc": "Hear a Follower's confession to increase their Loyalty. Can be used once a day. Can only be built once.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Missionary",
    "category": "Faith - General",
    "cost": [
      {
        "resource": "Coins",
        "qty": 40
      },
      {
        "resource": "Stone",
        "qty": 5
      },
      {
        "resource": "Lumber",
        "qty": 20
      }
    ],
    "desc": "Send your Followers on a holy quest to gather resources. Can only be built once.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Missionary II",
    "category": "Faith - General",
    "cost": [
      {
        "resource": "Coins",
        "qty": 80
      },
      {
        "resource": "Stone Blocks",
        "qty": 5
      },
      {
        "resource": "Wooden Planks",
        "qty": 5
      }
    ],
    "desc": "Upgraded version of Missionary. Can send up to 2 Followers at once, more types of resources and more chance of success. Can only be built once.",
    "unlock": "Upgrade of Missionary",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Missionary III",
    "category": "Faith - General",
    "cost": [
      {
        "resource": "Crystal Shards",
        "qty": 20
      },
      {
        "resource": "Gold Bars",
        "qty": 20
      },
      {
        "resource": "Wooden Planks",
        "qty": 20
      }
    ],
    "desc": "Upgraded version of Missionary II. Can send up to 3 Followers once, more types of resources and more chance of success. Can only be built once.",
    "unlock": "Upgrade of Missionary II",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Tabernacle",
    "category": "Faith - General",
    "cost": [
      {
        "resource": "Coins",
        "qty": 20
      },
      {
        "resource": "Stone",
        "qty": 10
      }
    ],
    "desc": "A place for Followers who are not worshipping to pray throughout the day and deposit Devotion.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Tabernacle II",
    "category": "Faith - General",
    "cost": [
      {
        "resource": "Coins",
        "qty": 30
      },
      {
        "resource": "Stone Blocks",
        "qty": 5
      }
    ],
    "desc": "Upgraded version of Tabernacle. Can hold more Devotion.",
    "unlock": "Upgrade of Tabernacle",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Tabernacle III",
    "category": "Faith - General",
    "cost": [
      {
        "resource": "Stone Blocks",
        "qty": 10
      },
      {
        "resource": "Gold Bars",
        "qty": 10
      }
    ],
    "desc": "Upgraded version of Tabernacle II. Can hold more Devotion.",
    "unlock": "Upgrade of Tabernacle II",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Offering Statue",
    "category": "Faith - General",
    "cost": [
      {
        "resource": "Coins",
        "qty": 30
      },
      {
        "resource": "Lumber",
        "qty": 20
      },
      {
        "resource": "Stone",
        "qty": 10
      }
    ],
    "desc": "A statue where Followers can leave Offerings in your honour.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Empowered Shrine of Disciples",
    "category": "Faith - General",
    "cost": [
      {
        "resource": "Gold Bars",
        "qty": 15
      },
      {
        "resource": "Stone Blocks",
        "qty": 8
      }
    ],
    "desc": "Disciples pray at this Shrine to give you boosts while Crusading.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Collected Shrine of Disciples",
    "category": "Faith - General",
    "cost": "not published",
    "desc": "Disciples will collect Devotion from other structures within radius and deposits it here.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Drinkhouse",
    "category": "Faith - Sin",
    "cost": "not published",
    "desc": "Brew drinks for your Followers to generate Sin.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Drinkhouse II",
    "category": "Faith - Sin",
    "cost": "not published",
    "desc": "Brew drinks for your Followers to generate Sin. Stores more drink.",
    "unlock": "Upgrade of Drinkhouse",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Mating Tent",
    "category": "Faith - Sin",
    "cost": "not published",
    "desc": "Invite two Followers to decide if they wish to make an Egg together. Costs Sin.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Hatchery",
    "category": "Faith - Sin",
    "cost": "not published",
    "desc": "A place for eggs to hatch.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Hatchery II",
    "category": "Faith - Sin",
    "cost": "not published",
    "desc": "A place for eggs to hatch. Eggs will hatch quicker.",
    "unlock": "Upgrade of Hatchery",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Drum Circle",
    "category": "Faith - Sin",
    "cost": "not published",
    "desc": "Perform at the Drum Circle and let the rhythmic beats tempt the faithful. Generates Sin.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Wooden Lanterns",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 2
      }
    ],
    "desc": "A simple way to light the dark.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Crown Fountain",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Stone",
        "qty": 5
      }
    ],
    "desc": "A softly weeping fountain.",
    "unlock": "not published",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Wreath",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Grass",
        "qty": 4
      }
    ],
    "desc": "A simple decorative wreath of sticks.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Tree Stump Lamb Statue",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 3
      }
    ],
    "desc": "The Lamb carved of wood.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Stonehenge",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Stone",
        "qty": 2
      }
    ],
    "desc": "Who made it?",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Pond",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Stone",
        "qty": 2
      }
    ],
    "desc": "A tranquil pond.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Leafy Flower Sculpture",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Grass",
        "qty": 5
      }
    ],
    "desc": "A colourful display of nature's blessing.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": "Cost conflict: wiki.gg says 5 Grass, TechRaptor says 4 Grass. Both shown; not resolved."
  },
  {
    "name": "Leafy Lantern",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Grass",
        "qty": 4
      }
    ],
    "desc": "An overgrown stand for a lantern.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Lamb Flag Statue",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Stone",
        "qty": 5
      }
    ],
    "desc": "A statue of the mighty Lamb.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Stone Candle",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Stone",
        "qty": 1
      }
    ],
    "desc": "A candle atop a stone.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Flower Arch",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Grass",
        "qty": 10
      }
    ],
    "desc": "An archway of woven blooms and vines.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": "Cost conflict: wiki.gg says 10 Grass, TechRaptor says 8 Grass. Both shown; not resolved."
  },
  {
    "name": "Camellia Bed",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Camellia",
        "qty": 2
      },
      {
        "resource": "Grass",
        "qty": 5
      }
    ],
    "desc": "A decorative bed made of Camellia flowers.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Bone Wall",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Bone",
        "qty": 1
      }
    ],
    "desc": "Sturdier than grass.",
    "unlock": "Bone Decorations Divine Inspiration",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Candle Barrel",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 1
      }
    ],
    "desc": "A Barrel with candles atop.",
    "unlock": "Basic Decorations Divine Inspiration",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Small Stone Candle",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Stone",
        "qty": 2
      }
    ],
    "desc": "An ancient stone holding a single candle.",
    "unlock": "Basic Decorations Divine Inspiration",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Twig Wall",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 1
      }
    ],
    "desc": "Stronger than grass.",
    "unlock": "Basic Decorations Divine Inspiration",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Grass Wall",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Grass",
        "qty": 1
      }
    ],
    "desc": "Better than nothing.",
    "unlock": "Basic Decorations Divine Inspiration",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": "Cost conflict: wiki.gg says 1 Grass, TechRaptor says 3 Grass. Both shown; not resolved."
  },
  {
    "name": "Potted Bush",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Grass",
        "qty": 3
      }
    ],
    "desc": "A pretty bush in a decorative pot.",
    "unlock": "Basic Decorations Divine Inspiration",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Ancient Stone",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Stone",
        "qty": 1
      }
    ],
    "desc": "A cool spooky stone formation.",
    "unlock": "Basic Decorations Divine Inspiration",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Flag of the Crown",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 1
      },
      {
        "resource": "Grass",
        "qty": 10
      }
    ],
    "desc": "A flag bearing the symbol of your Crown.",
    "unlock": "Basic Decorations Divine Inspiration",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Bone Arch",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Bone",
        "qty": 4
      }
    ],
    "desc": "An arch constructed of bones.",
    "unlock": "Bone Decorations Divine Inspiration",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Barrel of Bones",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Bone",
        "qty": 1
      },
      {
        "resource": "Lumber",
        "qty": 1
      }
    ],
    "desc": "A barrel... full of bones!",
    "unlock": "Bone Decorations Divine Inspiration",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Skull Candle",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Stone",
        "qty": 1
      }
    ],
    "desc": "Once holder of brains, now holder of candles.",
    "unlock": "Bone Decorations Divine Inspiration",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Skeleton Crown Flag",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Bone",
        "qty": 3
      }
    ],
    "desc": "A rigid bone pillar to raise your flag.",
    "unlock": "Bone Decorations Divine Inspiration",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Bone Lantern",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Bone",
        "qty": 3
      }
    ],
    "desc": "To illuminate and intimidate.",
    "unlock": "Bone Decorations Divine Inspiration",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Pile O' Skulls",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Bone",
        "qty": 2
      }
    ],
    "desc": "Skulls in a pile.",
    "unlock": "Bone Decorations Divine Inspiration",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Bone Sculpture",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Bone",
        "qty": 5
      }
    ],
    "desc": "An imposing sculpture built of bone.",
    "unlock": "Bone Decorations Divine Inspiration",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": "Cost conflict: wiki.gg says 5 Bone, TechRaptor says 4 Bone. Both shown; not resolved."
  },
  {
    "name": "Massive Monster Shrine",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Stone Blocks",
        "qty": 5
      }
    ],
    "desc": "Pray to the mighty monster. Can only be built once.",
    "unlock": "Defeating Rakshasa (per wiki.gg); \"attacking Rakshasa's Snail at his Shop and winning the battle\" (per TechRaptor)",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": "Cost conflict: wiki.gg says 5 Stone Blocks, TechRaptor says 4 Stone Brick (likely the same resource under the pre/post-patch name). Both shown; not resolved."
  },
  {
    "name": "The One Who Waits Trophy",
    "category": "Decoration - General",
    "cost": [
      {
        "resource": "Gold Bars",
        "qty": 20
      },
      {
        "resource": "Stone Blocks",
        "qty": 10
      }
    ],
    "desc": "A trophy for killing the One Who Waits. Can only be built once.",
    "unlock": "Choose to kill The One Who Waits after defeating him, or from the post-game area if you didn't choose to kill him.",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Wall Flower Pot",
    "category": "Decoration - Cultist Pack DLC",
    "cost": [
      {
        "resource": "Camellia",
        "qty": 1
      },
      {
        "resource": "Grass",
        "qty": 2
      }
    ],
    "desc": "Small flower pots strung upon a post.",
    "unlock": "Cultist Pack DLC",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Leafy Lamp Post",
    "category": "Decoration - Cultist Pack DLC",
    "cost": [
      {
        "resource": "Grass",
        "qty": 3
      },
      {
        "resource": "Stone",
        "qty": 2
      }
    ],
    "desc": "To illuminate the lush green surrounds.",
    "unlock": "Cultist Pack DLC",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Flower Vase",
    "category": "Decoration - Cultist Pack DLC",
    "cost": [
      {
        "resource": "Camellia",
        "qty": 2
      }
    ],
    "desc": "A delicate addition to any base.",
    "unlock": "Cultist Pack DLC",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Watering Can",
    "category": "Decoration - Cultist Pack DLC",
    "cost": [
      {
        "resource": "Camellia",
        "qty": 2
      },
      {
        "resource": "Stone",
        "qty": 1
      }
    ],
    "desc": "Not for practical use.",
    "unlock": "Cultist Pack DLC",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Small Flower Cart",
    "category": "Decoration - Cultist Pack DLC",
    "cost": [
      {
        "resource": "Camellia",
        "qty": 2
      },
      {
        "resource": "Lumber",
        "qty": 1
      }
    ],
    "desc": "The bounty of springtime, on wheels.",
    "unlock": "Cultist Pack DLC",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Weeping Shrine",
    "category": "Decoration - Cultist Pack DLC",
    "cost": [
      {
        "resource": "Stone",
        "qty": 2
      },
      {
        "resource": "Grass",
        "qty": 10
      }
    ],
    "desc": "A shrine in memory of a sorrowful soul.",
    "unlock": "Cultist Pack DLC",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Flower Flooring",
    "category": "Decoration - Cultist Pack DLC",
    "cost": "None",
    "desc": "Green grass with flowers growing.",
    "unlock": "Cultist Pack DLC",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Gem of Gore",
    "category": "Decoration - Heretic Pack DLC",
    "cost": [
      {
        "resource": "Stone Blocks",
        "qty": 1
      },
      {
        "resource": "Coins",
        "qty": 4
      }
    ],
    "desc": "A blood-red crystal. Smells of iron.",
    "unlock": "Heretic Pack DLC",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Flag of the Old Faith",
    "category": "Decoration - Heretic Pack DLC",
    "cost": [
      {
        "resource": "Coins",
        "qty": 2
      },
      {
        "resource": "Grass",
        "qty": 2
      }
    ],
    "desc": "A flag bearing a symbol of ancient scripture.",
    "unlock": "Heretic Pack DLC",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Fount of Desolation",
    "category": "Decoration - Heretic Pack DLC",
    "cost": [
      {
        "resource": "Stone",
        "qty": 4
      },
      {
        "resource": "Coins",
        "qty": 8
      },
      {
        "resource": "Follower Meat",
        "qty": 1
      }
    ],
    "desc": "A burbling spring of entropy.",
    "unlock": "Heretic Pack DLC",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Iron Maiden of Old Faith",
    "category": "Decoration - Heretic Pack DLC",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 3
      },
      {
        "resource": "Follower Meat",
        "qty": 1
      }
    ],
    "desc": "For those truly deserving of punishment.",
    "unlock": "Heretic Pack DLC",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Shrine of the Old Faith",
    "category": "Decoration - Heretic Pack DLC",
    "cost": [
      {
        "resource": "Stone",
        "qty": 2
      },
      {
        "resource": "Camellia",
        "qty": 2
      }
    ],
    "desc": "To commemorate what has endured.",
    "unlock": "Heretic Pack DLC",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "The Eternal Flame",
    "category": "Decoration - Heretic Pack DLC",
    "cost": [
      {
        "resource": "Stone",
        "qty": 1
      },
      {
        "resource": "Grass",
        "qty": 2
      }
    ],
    "desc": "Burning as long as the Old Faith perseveres.",
    "unlock": "Heretic Pack DLC",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Walls of Ruin",
    "category": "Decoration - Heretic Pack DLC",
    "cost": [
      {
        "resource": "Stone",
        "qty": 1
      }
    ],
    "desc": "Upon which forgotten pleas are carved.",
    "unlock": "Heretic Pack DLC",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Flooring of the Old Faith",
    "category": "Decoration - Heretic Pack DLC",
    "cost": "None",
    "desc": "The perfect tile upon which to bend the knee.",
    "unlock": "Heretic Pack DLC",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Twitch Flag of the Crown",
    "category": "Decoration - Twitch Unlocks",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 3
      }
    ],
    "desc": "A flag bearing the symbol of your Crown.",
    "unlock": "Twitch integration: filling up the Twitch totem bar and landing on the Twitch icon.",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Bag of Mushrooms",
    "category": "Decoration - Twitch Unlocks",
    "cost": [
      {
        "resource": "Menticide Mushroom",
        "qty": 2
      }
    ],
    "desc": "A big bag full of purple mushrooms.",
    "unlock": "Twitch",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Twitch Potted Bush",
    "category": "Decoration - Twitch Unlocks",
    "cost": [
      {
        "resource": "Grass",
        "qty": 3
      }
    ],
    "desc": "A pretty bush in a decorative pot.",
    "unlock": "Twitch",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Twitch Stone Flag",
    "category": "Decoration - Twitch Unlocks",
    "cost": [
      {
        "resource": "Stone",
        "qty": 2
      }
    ],
    "desc": "A stone pillar to raise your flag.",
    "unlock": "Twitch",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Stone Statue",
    "category": "Decoration - Twitch Unlocks",
    "cost": [
      {
        "resource": "Stone",
        "qty": 3
      }
    ],
    "desc": "A decorative statue carved from stone.",
    "unlock": "Twitch",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Wooden Guardian",
    "category": "Decoration - Twitch Unlocks",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 3
      }
    ],
    "desc": "A decorative statue carved from wood.",
    "unlock": "Twitch",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Lamb Plush Effigy",
    "category": "Decoration - Merch",
    "cost": [
      {
        "resource": "Grass",
        "qty": 20
      }
    ],
    "desc": "This effigy of the leader holds a connection to some distant world. Can only be built once.",
    "unlock": "Buying the Lamb plushie merch",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Blood Moon Candle",
    "category": "Decoration - Special Events",
    "cost": [
      {
        "resource": "Stone",
        "qty": 3
      },
      {
        "resource": "Grass",
        "qty": 1
      }
    ],
    "desc": "A decorative candle to commemorate the Blood Moon.",
    "unlock": "Catching ghosts during the Blood Moon Ritual",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Blood Moon Skull",
    "category": "Decoration - Special Events",
    "cost": [
      {
        "resource": "Bone",
        "qty": 2
      },
      {
        "resource": "Camellia",
        "qty": 2
      }
    ],
    "desc": "The skull of a creature who perished under red skies.",
    "unlock": "Blood Moon Festival, during the Blood Moon Ritual",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Blood Moon Tree",
    "category": "Decoration - Special Events",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 10
      }
    ],
    "desc": "A tree that only grows during the Blood Moon.",
    "unlock": "Blood Moon Festival, during the Blood Moon Ritual",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Blood Moon Pumpkin",
    "category": "Decoration - Special Events",
    "cost": [
      {
        "resource": "Pumpkin",
        "qty": 3
      },
      {
        "resource": "Lumber",
        "qty": 2
      }
    ],
    "desc": "Honour the Blood Moon with this pumpkin.",
    "unlock": "Blood Moon Festival, during the Blood Moon Ritual",
    "sources": [
      "wikigg"
    ],
    "conflict": null
  },
  {
    "name": "Dirt Flooring",
    "category": "Decoration - Paths",
    "cost": "None",
    "desc": "Only the finest dirt.",
    "unlock": "Crusading (per wiki.gg) / Chest / Challenge Reward / Shop (per TechRaptor)",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Hay Flooring",
    "category": "Decoration - Paths",
    "cost": "None",
    "desc": "Hay to lay upon the ground.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Lava Flooring",
    "category": "Decoration - Paths",
    "cost": "None",
    "desc": "Tread with care.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Cobblestone Flooring",
    "category": "Decoration - Paths",
    "cost": "None",
    "desc": "Sturdy and nostalgic.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Brick Flooring",
    "category": "Decoration - Paths",
    "cost": "None",
    "desc": "Follow the road.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Plank Flooring",
    "category": "Decoration - Paths",
    "cost": "None",
    "desc": "Wooden planks, perfect for walking.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Gold Flooring",
    "category": "Decoration - Paths",
    "cost": "None",
    "desc": "You are the Leader, after all.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Mosaic Flooring",
    "category": "Decoration - Paths",
    "cost": "None",
    "desc": "Perfectly placed patterns.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Forest Flooring",
    "category": "Decoration - Paths",
    "cost": "None",
    "desc": "Bring nature to you.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Farm Plot Sign",
    "category": "Decoration - Darkwood",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 2
      }
    ],
    "desc": "Organize your farm with this handy signpost.",
    "unlock": "Crusading in Darkwood (per wiki.gg) / Chest / Challenge Reward / Shop (per TechRaptor)",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Flower Barrow",
    "category": "Decoration - Darkwood",
    "cost": [
      {
        "resource": "Grass",
        "qty": 3
      },
      {
        "resource": "Camellia",
        "qty": 1
      }
    ],
    "desc": "A wheelbarrow filled with flowers.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Stone Wall",
    "category": "Decoration - Darkwood",
    "cost": [
      {
        "resource": "Stone",
        "qty": 1
      }
    ],
    "desc": "Sturdier than bone.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Large Torch",
    "category": "Decoration - Darkwood",
    "cost": [
      {
        "resource": "Stone",
        "qty": 2
      },
      {
        "resource": "Lumber",
        "qty": 2
      }
    ],
    "desc": "A blazing beacon.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Hay Bale",
    "category": "Decoration - Darkwood",
    "cost": [
      {
        "resource": "Grass",
        "qty": 2
      }
    ],
    "desc": "A bale of hay.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Hay Pile",
    "category": "Decoration - Darkwood",
    "cost": [
      {
        "resource": "Grass",
        "qty": 2
      }
    ],
    "desc": "A pile of hay.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Stone Flag (Darkwood)",
    "category": "Decoration - Darkwood",
    "cost": [
      {
        "resource": "Stone",
        "qty": 2
      }
    ],
    "desc": "A stone pillar to raise your flag.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Leshy Trophy",
    "category": "Decoration - Darkwood",
    "cost": [
      {
        "resource": "Gold Bars",
        "qty": 4
      },
      {
        "resource": "Stone",
        "qty": 3
      },
      {
        "resource": "Camellia",
        "qty": 10
      }
    ],
    "desc": "A trophy for killing Leshy. Can only be built once.",
    "unlock": "Beating Leshy.",
    "sources": [
      "wikigg"
    ],
    "conflict": "TechRaptor gives no cost for this item (\"Crafting Cost - ?\"); wiki.gg gives 4 Gold Bars, 3 Stone, 10 Camellia. Shown as the only sourced figure; TechRaptor's blank is not treated as a conflicting zero."
  },
  {
    "name": "Little Mushroom",
    "category": "Decoration - Anura",
    "cost": [
      {
        "resource": "Menticide Mushroom",
        "qty": 2
      }
    ],
    "desc": "A small mushroom.",
    "unlock": "Found in Sozo's tent in Spore Grotto (per TechRaptor); Crusading in Anura (per wiki.gg)",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Small Mushroom Candle",
    "category": "Decoration - Anura",
    "cost": [
      {
        "resource": "Menticide Mushroom",
        "qty": 2
      }
    ],
    "desc": "Mushroom stands for a few candles.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Mushroom Flag",
    "category": "Decoration - Anura",
    "cost": [
      {
        "resource": "Menticide Mushroom",
        "qty": 1
      },
      {
        "resource": "Lumber",
        "qty": 2
      }
    ],
    "desc": "A mushroom pillar to raise your flag.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Stone Mushroom",
    "category": "Decoration - Anura",
    "cost": [
      {
        "resource": "Stone",
        "qty": 3
      }
    ],
    "desc": "Don't be fooled; it's made of rock.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Pumpkin Pile",
    "category": "Decoration - Anura",
    "cost": [
      {
        "resource": "Pumpkin",
        "qty": 3
      }
    ],
    "desc": "A pile of pumpkins!",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Carved Pumpkin",
    "category": "Decoration - Anura",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 1
      },
      {
        "resource": "Pumpkin",
        "qty": 1
      }
    ],
    "desc": "A pumpkin carved with a crown.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Mushroom Sculpture",
    "category": "Decoration - Anura",
    "cost": [
      {
        "resource": "Menticide Mushroom",
        "qty": 35
      },
      {
        "resource": "Gold Bars",
        "qty": 20
      }
    ],
    "desc": "A decorative sculpture to celebrate fungus. Can only be built once.",
    "unlock": "Complete the Brainwashing Ritual and return to Sozo (per wiki.gg) / Completing a Quest from Sozo (per TechRaptor)",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": "Cost conflict: wiki.gg says 35 Menticide Mushroom + 20 Gold Bars, TechRaptor says 28 Menticide Mushroom + 16 Gold Bar. Both shown; not resolved."
  },
  {
    "name": "Heket Trophy",
    "category": "Decoration - Anura",
    "cost": [
      {
        "resource": "Gold Bars",
        "qty": 4
      },
      {
        "resource": "Menticide Mushroom",
        "qty": 10
      }
    ],
    "desc": "A trophy for killing Heket. Can only be built once.",
    "unlock": "Defeat Heket.",
    "sources": [
      "wikigg"
    ],
    "conflict": "TechRaptor gives no cost for this item (\"Crafting Cost - ?\"); wiki.gg gives 4 Gold Bars, 10 Menticide Mushroom."
  },
  {
    "name": "Crystal Lamp",
    "category": "Decoration - Anchordeep",
    "cost": [
      {
        "resource": "Crystal Shards",
        "qty": 2
      }
    ],
    "desc": "A lantern comprised of shining crystal.",
    "unlock": "Crusading in Anchordeep",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Crystal Lantern",
    "category": "Decoration - Anchordeep",
    "cost": [
      {
        "resource": "Crystal Shards",
        "qty": 3
      }
    ],
    "desc": "A large crystal that glows softly.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Crystal Rock",
    "category": "Decoration - Anchordeep",
    "cost": [
      {
        "resource": "Crystal Shards",
        "qty": 3
      }
    ],
    "desc": "A rock studded with blue crystal.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Crystal Statue",
    "category": "Decoration - Anchordeep",
    "cost": [
      {
        "resource": "Stone Blocks",
        "qty": 2
      },
      {
        "resource": "Crystal Shards",
        "qty": 3
      }
    ],
    "desc": "A radiant tower of shining crystal.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Crystal Window",
    "category": "Decoration - Anchordeep",
    "cost": [
      {
        "resource": "Crystal Shards",
        "qty": 2
      }
    ],
    "desc": "An arched window of stained glass.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Crystal Flag",
    "category": "Decoration - Anchordeep",
    "cost": [
      {
        "resource": "Crystal Shards",
        "qty": 3
      }
    ],
    "desc": "A crystal pillar to raise your flag.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Crystal Tree",
    "category": "Decoration - Anchordeep",
    "cost": [
      {
        "resource": "Lumber",
        "qty": 3
      },
      {
        "resource": "Crystal Shards",
        "qty": 3
      }
    ],
    "desc": "A unique form of flora.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Kallamar Trophy",
    "category": "Decoration - Anchordeep",
    "cost": [
      {
        "resource": "Gold Bars",
        "qty": 4
      },
      {
        "resource": "Crystal Shards",
        "qty": 10
      }
    ],
    "desc": "A trophy for killing Kallamar. Can only be built once.",
    "unlock": "Defeat Kallamar.",
    "sources": [
      "wikigg"
    ],
    "conflict": "TechRaptor gives no cost for this item (\"Crafting Cost - ?\"); wiki.gg gives 4 Gold Bars, 10 Crystal Shards."
  },
  {
    "name": "Spider Silk Wall",
    "category": "Decoration - Silk Cradle",
    "cost": [
      {
        "resource": "Spider Silk",
        "qty": 3
      }
    ],
    "desc": "Stronger than stone.",
    "unlock": "Crusading in the Silk Cradle",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Giant Skull",
    "category": "Decoration - Silk Cradle",
    "cost": [
      {
        "resource": "Bone",
        "qty": 5
      }
    ],
    "desc": "The remains of something truly impressive.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": "Cost conflict: wiki.gg says 5 Bone, TechRaptor says 4 Bone. Both shown; not resolved."
  },
  {
    "name": "Skull Pile",
    "category": "Decoration - Silk Cradle",
    "cost": [
      {
        "resource": "Bone",
        "qty": 5
      }
    ],
    "desc": "A large intimidating pile of skulls.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": "Cost conflict: wiki.gg says 5 Bone, TechRaptor says 4 Bone. Both shown; not resolved."
  },
  {
    "name": "Spider Lantern",
    "category": "Decoration - Silk Cradle",
    "cost": [
      {
        "resource": "Spider Silk",
        "qty": 2
      }
    ],
    "desc": "A lantern stand covered in cobwebs.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Spider Pillar",
    "category": "Decoration - Silk Cradle",
    "cost": [
      {
        "resource": "Spider Silk",
        "qty": 8
      }
    ],
    "desc": "A pillar draped in spider silk.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": "Cost conflict: wiki.gg says 8 Spider Silk, TechRaptor says 7 Spider Silk. Both shown; not resolved."
  },
  {
    "name": "Spider Torch",
    "category": "Decoration - Silk Cradle",
    "cost": [
      {
        "resource": "Spider Silk",
        "qty": 3
      }
    ],
    "desc": "To illuminate the spider-filled dark.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Web Crown Sculpture",
    "category": "Decoration - Silk Cradle",
    "cost": [
      {
        "resource": "Spider Silk",
        "qty": 3
      }
    ],
    "desc": "Your symbol captured in a cobweb.",
    "unlock": "Chest / Challenge Reward / Shop",
    "sources": [
      "wikigg",
      "techraptor_decor"
    ],
    "conflict": null
  },
  {
    "name": "Shamura Trophy",
    "category": "Decoration - Silk Cradle",
    "cost": [
      {
        "resource": "Gold Bars",
        "qty": 4
      },
      {
        "resource": "Spider Silk",
        "qty": 10
      }
    ],
    "desc": "A trophy for killing Shamura. Can only be built once.",
    "unlock": "Defeat Shamura.",
    "sources": [
      "wikigg"
    ],
    "conflict": "TechRaptor gives no cost for this item (\"Crafting Cost - ?\"); wiki.gg gives 4 Gold Bars, 10 Spider Silk."
  }
];

function findItem(name) {
  return ITEMS.find(i => i.name.toLowerCase() === name.toLowerCase());
}

function allResources() {
  const set = new Set();
  for (const item of ITEMS) {
    if (Array.isArray(item.cost)) {
      for (const c of item.cost) set.add(c.resource);
    }
  }
  return Array.from(set).sort();
}

function itemsUsingResource(resource) {
  return ITEMS.filter(i =>
    Array.isArray(i.cost) && i.cost.some(c => c.resource === resource)
  ).map(i => ({
    name: i.name,
    qty: i.cost.find(c => c.resource === resource).qty,
  }));
}

function totalForPlan(plan) {
  // plan: [{name, qty}]
  const totals = {};
  const notPublished = [];
  for (const entry of plan) {
    const item = findItem(entry.name);
    if (!item) continue;
    if (!Array.isArray(item.cost)) {
      if (item.cost === "not published") notPublished.push(item.name);
      continue;
    }
    for (const c of item.cost) {
      totals[c.resource] = (totals[c.resource] || 0) + c.qty * entry.qty;
    }
  }
  return { totals, notPublished };
}

function allCategories() {
  const set = new Set(ITEMS.map(i => i.category));
  return Array.from(set);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { SOURCES, ITEMS, findItem, allResources, itemsUsingResource, totalForPlan, allCategories };
}
