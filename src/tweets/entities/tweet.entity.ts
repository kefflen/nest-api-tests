import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type TweetDocument = Tweet & Document

export type tweetProps = {
  content: string
  screenName: string
}

@Schema()
export class Tweet {
  @Prop({ required: true })
  content: string
  @Prop({ required: true })
  screenName: string

  constructor(private props: tweetProps) {
    Object.assign(this, props)
  }
}

export const TweetSchema = SchemaFactory.createForClass(Tweet)
