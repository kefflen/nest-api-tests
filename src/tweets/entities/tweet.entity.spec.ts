/* eslint-disable prettier/prettier */
import mongoose from 'mongoose'
import { Tweet, TweetSchema } from './tweet.entity'

describe('Tweet tests', () => {
  it('should create a tweet', () => {
    const tweet = new Tweet({
      content: 'Hello world',
      screenName: 'Kefflen',
    })

    expect(tweet.content).toBe('Hello world')
    expect(tweet.screenName).toBe('Kefflen')
  })
})

describe('Tweet Schema tests', () => {
  let connection: mongoose.Mongoose

  beforeAll(async () => {
    connection = await mongoose.connect('mongodb://root:root@localhost:27017/tweet-entity-test?authSource=admin')
  })

  afterAll(async () => {
    await connection.disconnect()
  })
  
  it('should create a tweet document', async () => {
    const TweetModel = await connection.model('Tweet', TweetSchema)
    const tweet = new TweetModel({
      content: 'Hello world',
      screenName: 'Kefflen',
    })

    await tweet.save()
    
    const createdTweet = await TweetModel.findById(tweet._id)
    expect(createdTweet.content).toBe('Hello world')
    expect(createdTweet.screenName).toBe('Kefflen')
  })
})