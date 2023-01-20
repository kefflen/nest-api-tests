export type tweetProps = {
  content: string
  screenName: string
}

export class Tweet {
  content: string
  screenName: string

  constructor(private props: tweetProps) {
    Object.assign(this, props)
  }
}
