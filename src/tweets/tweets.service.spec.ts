import { MongooseModule } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'
import { Tweet, TweetSchema } from './entities/tweet.entity'
import { TweetsService } from './tweets.service'

describe('TweetsService', () => {
  const uri =
    'mongodb://root:root@localhost:27017/tweet-service-test?authSource=admin'
  let service: TweetsService
  let module: TestingModule

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(uri),
        MongooseModule.forFeature([
          {
            name: Tweet.name,
            schema: TweetSchema,
          },
        ]),
      ],
      providers: [TweetsService],
    }).compile()

    service = module.get<TweetsService>(TweetsService)
  })

  afterEach(async () => {
    await module.close()
  })
  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should create tweets', async () => {
    const tweet = await service.create({
      content: 'Hello World',
      screenName: 'Kefflen',
    })
    expect(tweet.content).toBe('Hello World')
    expect(tweet.screenName).toBe('Kefflen')
  })
})
