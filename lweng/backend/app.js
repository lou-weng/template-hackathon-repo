import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// ### SQS Testing ###

import { SQSClient, AddPermissionCommand } from '@aws-ask/client-sqs'

const client = new SQSClient({ region: "us-west-2" })



// ### SNS Testing ###
