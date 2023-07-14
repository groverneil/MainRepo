# bot.py
import os

import discord
from discord import app_commands
from dotenv import load_dotenv

from responses import respond

load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')
GUILD = os.getenv('DISCORD_GUILD')

intents = discord.Intents.all()
client = discord.Client(intents=intents)

@client.event
async def on_ready():
    for guild in client.guilds:
        if guild.name == GUILD:
            break

    print(
        f'{client.user} is connected to the following guild:\n'
        f'{guild.name}(id: {guild.id})'
    )

# @client.event
# async def on_message(message):
#     if message.author == client.user:
#         return


#     answer = respond(message.content)

#     await message.channel.send(answer)

tree = app_commands.CommandTree(client);

@tree.command(name = "test", description = "Testing this code")
async def self(interaction: discord.Interaction):

    print("hello???")

    await interaction.response.send_message("???")

client.run(TOKEN)