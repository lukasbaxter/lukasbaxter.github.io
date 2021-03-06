
var recipes = [
	['Anvil', 'https://hydra-media.cursecdn.com/minecraft.gamepedia.com/d/dd/Anvil.png?version=6a752a61a58b19ebb9786efd3c0348b3'],
	['Arrow', 'https://hydra-media.cursecdn.com/minecraft.gamepedia.com/4/41/Arrow.png?version=cdbf2a253ba53effe6e52e0d78983aeb'],
	['Axe',   'https://hydra-media.cursecdn.com/minecraft.gamepedia.com/1/11/Wooden_Axe.png?version=5e70eb5ff667ad1215d3b5312638998e'],'Bed' ,  
	['Book and Quill', 'https://hydra-media.cursecdn.com/minecraft.gamepedia.com/b/ba/Book_and_Quill.png?version=2433f317513841f18aabdb41f8112257'],
	['Book',  'https://hydra-media.cursecdn.com/minecraft.gamepedia.com/f/f3/Book.png?version=14fa68ec3e085c005825876d367934e3'],
	['Bookshelf','https://hydra-media.cursecdn.com/minecraft.gamepedia.com/f/f7/Bookshelf.png?version=8dacce1b38ad18be79491d039eae2a38'],
	['Bread',  'https://hydra-media.cursecdn.com/minecraft.gamepedia.com/e/e1/Bread.png?version=ac6a24011c728eba04dc91f38b3a288f'],
	['Brewing stand', 'https://hydra-media.cursecdn.com/minecraft.gamepedia.com/f/fa/Brewing_Stand.png?version=2dc9b986ad979b92974c31f70f47e19f'],
	['Crafting table','https://hydra-media.cursecdn.com/minecraft.gamepedia.com/d/d4/Crafting_Table.png?version=2534cbea4b74afd2f5f26da77e8983fc'],
	['Door',  'https://hydra-media.cursecdn.com/minecraft.gamepedia.com/2/2c/Wooden_Door.png?version=f1221857d48d23e55f5abfd02fb9de4e'],
	['Enchantment table',  'https://hydra-media.cursecdn.com/minecraft.gamepedia.com/c/ca/Enchantment_Table.png?version=715c7d68d5a1cc4b3482ad36ba0aeecc'],
	['Fence Gate',  'https://hydra-media.cursecdn.com/minecraft.gamepedia.com/c/ca/Oak_Fence_Gate_%28Closed%29.png?version=187ef0196d0cd6d8c4db0af483fec508'],
	['Fence', 'https://hydra-media.cursecdn.com/minecraft.gamepedia.com/0/0c/Oak_Fence.png?version=2dc462db3f7509634e49e9d9d5636f85'],
	['flint and Steel',  'https://hydra-media.cursecdn.com/minecraft.gamepedia.com/7/7e/Flint_and_Steel.png?version=4f0997784531cace38645318ff05728b'],
	['Furnace',  'https://hydra-media.cursecdn.com/minecraft.gamepedia.com/4/4b/Furnace_%28Active%29.png?version=e4330fd500424405d50ba787e30c8d95'],
	['Golden apple', 'https://hydra-media.cursecdn.com/minecraft.gamepedia.com/0/0e/Golden_Apple.png?version=8c25d71c45c2167eb024419905fd340b'],
	['Hoe', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/0/04/Diamond_Hoe.png?version=afee934404b552c05e7c90d32d089c2f'],
	['Jukebox', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/6/65/Jukebox.png?version=09bfa3284bb9fe157efe8f771a3fe6b4'],
	['Ladder', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/6/63/Ladder.png?version=b81af5f2b54e644be4c57aa23317ab88'],
	['Lever', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/e/e5/Lever.gif?version=bcec520bce5a415d8dec19d314185102'],
	['Lingering Potion',  'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/1/19/Lingering_Potions.gif?version=9124a27ab25792637449dbd2d39d8624'],
	['Minecart', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/1/12/Minecart.png?version=58eb2000127c616f65fd6ab5a10ed4d9'],
	['Note Block', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/9/9b/Note_Block.png?version=ea3a4370642a8a3d55c1c2ed44b6e160'],
	['Pickaxe', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/b/b3/Wooden_Pickaxe.png?version=ac07a523ea6fcf0857bd6b1c09056e53'],
	['Powered Rail','https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/3/30/PoweredRail.gif?version=4b43dc442b9b81f7c36a9008a7c2f5e9'],
	['Pressure Plate', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/e/ec/Wooden_Pressure_Plate.png?version=ef59e7b10def2acecea814656822105d'],
	['Rail', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/1/1e/Rail.png?version=4d94a994499493acdcdb8921ad669424'],
    ['Redstone Repeater', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/a/a2/Redstone_%28Repeater%2C_Active%29.gif?version=04f93b27404cf36c31fbd0924876c72b'],
	['Redstone Torch', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/5/54/Redstone_%28Torch%2C_Active%29.png?version=709c02194bbe5026dd700b0ac6bb09a2'],
	['Shears', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/d/d1/Shears.png?version=8c92d732c31053deeb40f0da699f4fd4'],
	['Stick', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/a/aa/Stick.png?version=c4ba15f135f2a6bfd9a7e8c4f642e371'],
	['Sword', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/a/a0/Diamond_Sword.png?version=0099d273527ef4575ac9dec22c2a58f2'],
	['Torch', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/b/b2/Torch.png?version=1d85e6b85a6e931d4b955dcf908a20c7'],
	['Trapdoor', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/9/94/Trapdoor.png?version=6e8f05b113e6ab5b9251c39f7f2fee81'],
	['Tripwire Hook', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/f/f5/Tripwire_Hook.gif?version=ff91e77f3b9409c1571e3b6d03f12dfc'],
	['Wood Planks', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/0/0f/Oak_Wood_Planks.png?version=f0faf55a7c0261fce2f576a69246a832'],
	['Cake', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/f/f0/Cake.png?version=5695c68204e652f961ef34319e5075c3'],
	['Brick', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/5/58/Brick.png?version=7557179cdb78b4f885a5c0221806972a'],
	['Shield', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/c/cf/Shield.png?version=ac257e92c75c760f4fcc234aa0e90da3'],
	['Bowl', 'https://hydra-media.cursecdn.com/minecraft.gamepedia.com/9/9c/Bowl.png?version=210f411635b8cd5da76472127b3da099'],
	['Armor', 'https://hydra-media.cursecdn.com/minecraft.gamepedia.com/5/5a/Armorc.png?version=f19270f9cfd2cf96d4bd388425bfe95b'], 
	['Crafting/Dye', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/e/eb/Light_Blue_Dye.png?version=ecbac31612ef81e50cc4b78a305307c3'],
	['Banner',  'https://hydra-media.cursecdn.com/minecraft.gamepedia.com/b/b6/Orange_Banner.png?version=b110fdd588bfa43855e36f2c076e3f18'],
	['Diamond', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/e/ea/Diamond.png?version=7e9dffc89cbb073f4e73b7a8865fd5dd'],
	['Slime', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/3/38/Slime.png?version=c8b92c79ab01bcc7d3af8b262efb192c'],
	['Item Frame', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/d/d8/Item_Frame.png?version=0a05bc7ebde1ad857ae71c75980de460'],
   	['Leather', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/3/3d/Leather.png?version=1b91eae3c94d8a4f1df4f031b080176b'],
	['Paper', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/b/b2/Paper.png?version=9703f404fca8e5a35f8f62e2ecb82208'],
	['Horse Armor', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/a/a0/Diamond_Horse_Armor.png?version=250a2a89c09ea9d6f6f29bfd62b14b35'],
	['Ender Chest', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/f/f6/Ender_Chest.gif?version=937c7453367f26399dc8b20984b3572b'],
	['Eye of Ender', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/3/30/Eye_of_Ender.png?version=6ec736a18bd507cc9e0164a32542afcb'],
	['End portal', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/a/ae/StrongholdPortalRoom.png?version=febae8c1fccb5a78804544b2c4f6a618'],
	['Iron Golem', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/c/c9/Village_Golem.png?version=0b364a1ba6acf27869c3e8cb8954fad7'],
	['Piston', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/d/d4/Piston.gif?version=3b4f66ee13624444dc6ba4156db33e66'],
	['Potion', 'https://minecraft.gamepedia.com/media/minecraft.gamepedia.com/a/a6/Potions.gif?version=82b9270d89f0f6e27dfd8af51c3f8aff'],




]
	

function showRecipes(recipes) {
	let ul = document.getElementById('recipes');
	ul.innerHTML = recipes.sort().map((maybe_pair, index) =>
		{
			let name, url
			if (typeof maybe_pair != 'string') {
				name = maybe_pair[0]
				url = maybe_pair[1]
			} else {
				name = maybe_pair
			}
			return `<li>${index + 1}. <a href="http://minecraft.gamepedia.com/${name}">${name}</a> ${url ? '<img class="recipe" src="'+url+'" />' : ''}</li>`
		}
	).join('\n');
}

showRecipes(recipes);