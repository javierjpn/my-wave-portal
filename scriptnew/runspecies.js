var species = [];

//set list
if (response.returnCode == 200) {
    if (response.Payload.length > 0) {
        $(respomse.Payload).each(function (i, item) {
            species.push({
                "id": item.Number.substring(2),
                "name": item.Beast,
                "star": item.StarRank,
                "types": item["Type 1"],
                "baseStats": {
                "hp": item.HP,
                "atk": item.Attack,
                "def": item.Defense,
                "speed": item.speed,
                "spAtk": item["Speed Attack"],
                "spDef": item["Speed Defense"],
                },

            });

        });
    }
}


