import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs'

const client = new SQSClient({ region: "us-east-2" })

async function sqsSendMessage(message) {
	const params = {
		AWSAccountIds: [
			"474591946157"
		],
		Actions: [
			"SendMessage"
		],
		MessageAttributes: {
			Title: {
			  DataType: "String",
			  StringValue: "The Whistler",
			},
			Author: {
			  DataType: "String",
			  StringValue: "John Grisham",
			},
			WeeksOn: {
			  DataType: "Number",
			  StringValue: "6",
			},
		},
		MessageBody: `${message}`,
		Label: `${message}`,
		QueueUrl: "https://sqs.us-east-2.amazonaws.com/474591946157/metrohacks-testing"
	}
	const command = new SendMessageCommand(params)
	
	try {
		const data = await client.send(command)
		console.log(data);
	} catch (error) {
		console.log(`Error when sending data: ${error.message}`)
	}
}

sqsSendMessage("HELLO WORLD")

