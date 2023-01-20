/* eslint-disable prettier/prettier */
import { Tweet } from './tweet.entity'

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
