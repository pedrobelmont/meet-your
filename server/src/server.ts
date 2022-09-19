import express, { json }  from "express"
import { PrismaClient } from "@prisma/client"
const app = express()
const prisma = new PrismaClient({
    log: ['query']
})
app.use(json())
app.get('/games',async (request,response)=>{
    const games = await prisma.game.findMany({
        include:{
            _count:{
                select : {
                    ads: true
                }
            }
        }
    })
    return response.json(games)
})

app.post('/games/:id/ads',async (request,response)=>{
    const gameId = request.params.id
    const body = request.body
    // const ad = await prisma.ad.create({
    //     data: {
    //         gameId,
    //         name: body.name,
    //     }
    // })

    return response.status(201).json([body,gameId])
})

app.get('/games/:id/ads',async (request,response) => {
    const gameId = request.params.id;
    
    const ads = await prisma.ad.findMany({
        select:{
            id:true,
            game:true,
            name:true,
            createdAt:true,
            gameId:true,
            hourEnd:true,
            hourStart:true,
            useVoiceChannel:true,
            weekDays:true,
            yearsPlayingString:true,
        },
        where: { 
            gameId: gameId,
        },
        orderBy: {
            createdAt:'desc'
        }
    })
    
    return response.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(',')
        }
    }))
})

app.get('/ads/:id/discord',async (request,response) => {
    const adsId = request.params.id;
    
    const id = await prisma.ad.findUniqueOrThrow({
        select:{
            nameDiscord: true
        },
        where: {
            id: adsId
        }
    })
    return response.json(id.nameDiscord)
})
app.listen(3333)
