import { PublishCommand, SNSClient } from "@aws-sdk/client-sns";

const snsClient = new SNSClient({ region: "us-east-2" })

async function snsSendMessage(message) {
    const params = {
        Message: `${message}`,
        TopicArn: 'arn:aws:sns:us-east-2:474591946157:metrohacks-test'
    }

    const command = new PublishCommand(params)

    try {
        const data = await snsClient.send(command)
        console.log(data)
    } catch (error) {
        console.log(`Error when sending data: ${error.message}`)
    }
}

snsSendMessage("TOPIC MESSAGE")
